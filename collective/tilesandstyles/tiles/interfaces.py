from zope.interface import Interface
from zope import schema

from plone.supermodel.model import Schema

from plone.autoform.directives import widget
from plone.app.standardtiles.contentlisting import QueryStringFieldWidget



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
