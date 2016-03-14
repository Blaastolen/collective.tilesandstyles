import datetime
from DateTime import DateTime
from collective.tilesandstyles.tiles.interfaces import IHTMLTile
from plone.tiles import PersistentTile
from zope.interface import implements





class HTMLTile(PersistentTile):
    """HTML tile."""

    implements(IHTMLTile)

    def browserDefault(self, request):
        """By default, tiles render themselves with no browser-default view
        """
        import pdb; pdb.set_trace()
        return self, ()


    def __call__(self):
        html = self.data.get('source_text', u'')
        javascript = self.data.get('javascript', [])
        if javascript is None:
            javascript = []
        script = ""
        for js in javascript:
            script += "<script src='%s' type='text/javascript'></script>"%js
        return u"<html><head>%s</head><body>%s</body></html>" % (script, html,)
