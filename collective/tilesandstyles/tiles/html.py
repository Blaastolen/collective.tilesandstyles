import datetime
from DateTime import DateTime

from zope import schema
from zope.interface import implements

from plone.supermodel.model import Schema
from plone.tiles import PersistentTile



class IHTMLTile(Schema):
    javascript = schema.List(
        value_type=schema.TextLine(title=u"Javascript"),
        title= u"Javascript",
        description=u"Add javascript to load",
        required=False
    )

    source_text = schema.SourceText(
        title= u"HTML",
        description=u"This HTML will be rendered by the tile, use for embed or javascript",
        required=True
    )




class HTMLTile(PersistentTile):
    """HTML tile."""

    implements(IHTMLTile)

    def __call__(self):
        html = self.data.get('source_text', u'')
        javascript = self.data.get('javascript', [])
        if javascript is None:
            javascript = []
        script = ""
        for js in javascript:
            script += "<script src='%s' type='text/javascript'></script>"%js
        return u"<html><head>%s</head><body>%s</body></html>" % (script, html,)
