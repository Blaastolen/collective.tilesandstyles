# -*- coding: utf-8 -*-
from zope.interface import implements
from zope.component import getMultiAdapter
from zope import schema

from plone.supermodel.model import Schema

from plone.autoform.directives import widget
from plone.app.standardtiles.contentlisting import QueryStringFieldWidget
from plone.tiles import PersistentTile
from plone.app.contentlisting.interfaces import IContentListing
from Products.CMFPlone.PloneBatch import Batch


class ISearchTile(Schema):

    title = schema.TextLine(
        title=u"Title",
        required=True
    )
    """ Tiles with today widget"""
    widget(field_name='query', widget_class=QueryStringFieldWidget, pattern_options= {'indexes':['path']})
    query = schema.List(
        title=u"Search terms, it will only use path and types",
        value_type=schema.Dict(value_type=schema.Field(),
                               key_type=schema.TextLine()),
        description=u"Define the search terms for the items "
                      u"you want to list by choosing what to match on. The "
                      u"list of results will be dynamically updated",
        required=False
    )


class SearchTile(PersistentTile):
    """The base class for metadata tiles (such as title and description)."""

    implements(ISearchTile)


    valid_keys = ('sort_on', 'sort_order', 'sort_limit', 'fq', 'fl', 'facet')


    def breadcrumbs(self, item):
        obj = item.getObject()
        view = getMultiAdapter((obj, self.request), name='breadcrumbs_view')
        # cut off the item itself
        breadcrumbs = list(view.breadcrumbs())[:-1]
        if len(breadcrumbs) == 0:
            # don't show breadcrumbs if we only have a single element
            return None
        if len(breadcrumbs) > 3:
            # if we have too long breadcrumbs, emit the middle elements
            empty = {'absolute_url': '', 'Title': unicode('…', 'utf-8')}
            breadcrumbs = [breadcrumbs[0], empty] + breadcrumbs[-2:]
        return breadcrumbs

    @property
    def st(self):
        return self.request.get("SearchableText",u'')

    def results(self, query=None, batch=True, b_size=10, b_start=0):
        """ Get properly wrapped search results from the catalog.
        Everything in Plone that performs searches should go through this view.
        'query' should be a dictionary of catalog parameters.
        """

        if self.st == u"":
            return None

        self.query = self.data.get('query')
        if type(self.st) == type(""):
            self.st = unicode(self.st, 'utf-8')
        self.query.append({u'i': u'SearchableText', u'o': u'plone.app.querystring.operation.string.contains', u'v': u'%s'%self.st})

        builder = getMultiAdapter((self.context, self.request),
                                  name='querybuilderresults')



        accessor = builder(query=self.query or [])

        results = IContentListing(accessor)
        if batch:
            results = Batch(results, b_size, b_start)
        return results
