from zope.interface import directlyProvides
from zope.interface import implementer
from zope.schema.interfaces import IVocabularyFactory
from zope.schema.vocabulary import SimpleVocabulary



def availableListingViewsVocabulary(context):
    """Get available views for listing content as vocabulary"""
    listing_views = {
        'news_view': u'News frontpage view',
        'news_listing': u'News listing',
        'listing_view': u'Listing view',
        'summary_view': u'Summary view',
        'tabular_view': u'Tabular view'
    }
    sorted = listing_views.items()
    sorted.sort(lambda a, b: cmp(a[1], b[1]))
    voc = []
    for key, label in sorted:
        voc.append(SimpleVocabulary.createTerm(key, key, label))
    return SimpleVocabulary(voc)

directlyProvides(availableListingViewsVocabulary, IVocabularyFactory)

def availableContentViewsVocabulary(context):
    """Get available views for listing content as vocabulary"""
    listing_views = {
        'existing_content': u'News frontpage view',
    }
    sorted = listing_views.items()
    sorted.sort(lambda a, b: cmp(a[1], b[1]))
    voc = []
    for key, label in sorted:
        voc.append(SimpleVocabulary.createTerm(key, key, label))
    return SimpleVocabulary(voc)

directlyProvides(availableContentViewsVocabulary, IVocabularyFactory)


def availableContentViewsClassesVocabulary(context):
    """Get available views for listing content as vocabulary"""
    listing_views = {
        'music': u'music',
        'multilingual': u'multilingual',
        'movie': u'movie',
        'literature': u'literature',
        'history': u'history',
        'games': u'games',
        'children': u'children',
        'art': u'art',
    }
    sorted = listing_views.items()
    sorted.sort(lambda a, b: cmp(a[1], b[1]))
    voc = []
    for key, label in sorted:
        voc.append(SimpleVocabulary.createTerm(key, key, label))
    return SimpleVocabulary(voc)

directlyProvides(availableContentViewsClassesVocabulary, IVocabularyFactory)
