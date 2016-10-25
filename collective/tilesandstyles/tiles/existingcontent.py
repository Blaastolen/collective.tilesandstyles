# -*- coding: utf-8 -*-
from zope.component import getMultiAdapter
from plone.app.blocks import utils
from plone.app.blocks.tiles import renderTiles
from plone.app.standardtiles import PloneMessageFactory as _
from plone.app.uuid.utils import uuidToObject
from plone.app.vocabularies.catalog import CatalogSource as CatalogSourceBase
from plone.memoize.view import memoize
from plone.supermodel import model
from plone.tiles import Tile
from plone.uuid.interfaces import IUUID
from repoze.xmliter.utils import getHTMLSerializer
from zope import schema
from zope.browser.interfaces import IBrowserView
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile


class CatalogSource(CatalogSourceBase):
    """ExistingContentTile specific catalog source to allow targeted widget
    """


class IExistingContentTile(model.Schema):

    content_uid = schema.Choice(
        title=_(u"Select an existing content"),
        required=True,
        source=CatalogSource(),
    )

    view_template = schema.Choice(title=_(u"Display mode"),
                              source=_(u"Available Content Views"),
                              required=True)
    view_class = schema.Choice(title=_(u"Display Class"),
                              source=_(u"Available Content View Classes"),
                              default="gray",
                              required=True)



class ExistingContentTile(Tile):
    """Existing content tile
    """
    def __call__(self):
        if self.content_context is not None:
            self.view_template = self.data.get('view_template')
            name = self.view_template or 'existing_content'
            return getMultiAdapter((self.content_context, self.request), name=name)(view_class=self.view_class)
        else:
            return "BBB NO CONTENT"

    @property
    @memoize
    def view_class(self):
        return self.data.get('view_class')



    @property
    @memoize
    def content_context(self):
        uuid = self.data.get('content_uid')
        if uuid != IUUID(self.context, None):
            item = uuidToObject(uuid)
            if item is not None:
                return item
            else:
                return None
        else:
            return None
