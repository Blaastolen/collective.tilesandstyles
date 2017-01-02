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
from plone.namedfile.field import NamedBlobImage
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile

class IHeroTile(model.Schema):
    title = schema.Text(
                    title=_(u"Text"),
                    required=False,
                    default=u'')

    image  = NamedBlobImage(
        title=_(u"Hero image."),
        required=True,
    )




class HeroTile(PersistentTile):
    """Existing content tile
    """
