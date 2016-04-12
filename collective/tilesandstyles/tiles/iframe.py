from DateTime import DateTime
from zope.interface import Interface
from zope import schema

from plone.tiles import PersistentTile
from zope.interface import implements
from plone.supermodel.model import Schema



class IIFrameTile(Schema):
    iframe = schema.SourceText(
        title= u"Responsive Iframe",
        description=u"Paste your <iframe tag here",
        required=True
    )



class IFrameTile(PersistentTile):
    """HTML tile."""

    implements(IIFrameTile)


    def __call__(self):
        iframe = self.data.get('iframe', u'')
        return u"""<html><body><div class="videowrapper">"""+iframe+"""</div></body></html>"""
