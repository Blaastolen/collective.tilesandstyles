from zope.interface import directlyProvides
from zope.interface import implementer
from zope.schema.interfaces import IVocabularyFactory
from zope.schema.vocabulary import SimpleVocabulary



def availableContentViewsVocabulary(context):
    """Get available views for listing content as vocabulary"""
    listing_views = {
        'existing_content': u'Cover Image view',
    }
    sorted = listing_views.items()
    sorted.sort(lambda a, b: cmp(a[1], b[1]))
    voc = []
    for key, label in sorted:
        voc.append(SimpleVocabulary.createTerm(key, key, label))
    return SimpleVocabulary(voc)

directlyProvides(availableContentViewsVocabulary, IVocabularyFactory)

def availableListingViewsVocabulary(context):
    """Get available views for listing content as vocabulary"""
    listing_views = {
        'coverimage_listing': u'Cover Image Listing',
        'horisontal_listing': u'Horisontal Listing',
        'carousel': u'Carousel',
        'horisontal_newslisting': u'Horisontal News Listing',
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


def availableRSSViewsVocabulary(context):
    """Get available views for listing content as vocabulary"""
    listing_views = {
        'defaultrsstile': u'Default RSS',
        'horisontalrss': u'Horisontal RSS image listing',
    }
    sorted = listing_views.items()
    sorted.sort(lambda a, b: cmp(a[1], b[1]))
    voc = []
    for key, label in sorted:
        voc.append(SimpleVocabulary.createTerm(key, key, label))
    return SimpleVocabulary(voc)

directlyProvides(availableRSSViewsVocabulary, IVocabularyFactory)


def availableContentViewsClassesVocabulary(context):
    """Get available views for listing content as vocabulary"""
    listing_views = {
        'red': u'Red',
        'darkgreen': u'Darkgreen',
        'yellow': u'Yellow',
        'turquoise': u'Turquoise',
        'blue': u'Blue',
        'brown': u'Brown',
        'red': u'Red',
        'lightgreen': u'Lightgreen',
        'purple': u'Purple',
        'orange': u'Orange',
        'gray': u'Gray',
    }
    sorted = listing_views.items()
    sorted.sort(lambda a, b: cmp(a[1], b[1]))
    voc = []
    for key, label in sorted:
        voc.append(SimpleVocabulary.createTerm(key, key, label))
    return SimpleVocabulary(voc)

directlyProvides(availableContentViewsClassesVocabulary, IVocabularyFactory)
