# -*- coding: utf-8 -*-
from zope.component import getMultiAdapter
from plone.app.blocks import utils
from plone.app.blocks.tiles import renderTiles
from plone.app.standardtiles import PloneMessageFactory as _
from plone.app.uuid.utils import uuidToObject
from plone.app.vocabularies.catalog import CatalogSource as CatalogSourceBase
from plone.memoize.view import memoize
from plone.supermodel import model
from plone.tiles import PersistentTile
from plone.app.textfield import RichText
from plone.uuid.interfaces import IUUID
from repoze.xmliter.utils import getHTMLSerializer
from zope import schema
from zope.browser.interfaces import IBrowserView
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile

class IButtonTile(model.Schema):
    title = schema.TextLine(
                    title=_(u"Title"),
                    required=True,
                    default=u'')

    url = schema.URI(
               title=_(u"Link to more info"),
               required=False,)

    view_class = schema.Choice(title=_(u"Display Class"),
                              source=_(u"Available Content View Classes"),
                              default="gray",
                              required=True)



class ButtonTile(PersistentTile):
    """Existing content tile
    """
