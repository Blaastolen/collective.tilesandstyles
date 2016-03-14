# -*- coding: utf-8 -*-
from Acquisition import aq_inner, aq_parent
from zope.interface import implements
from zope.component import getMultiAdapter

from plone.tiles import PersistentTile
from plone.app.contentlisting.interfaces import IContentListing
from Products.CMFPlone.PloneBatch import Batch

from collective.tilesandstyles.tiles.interfaces import ISearchTile


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

        self.query.append({u'i': u'SearchableText', u'o': u'plone.app.querystring.operation.string.contains', u'v': u'%s'%self.st})

        builder = getMultiAdapter((self.context, self.request),
                                  name='querybuilderresults')



        accessor = builder(query=self.query or [])

        results = IContentListing(accessor)
        if batch:
            results = Batch(results, b_size, b_start)
        return results
