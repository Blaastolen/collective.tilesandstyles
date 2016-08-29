from zope.i18n import translate
from Products.CMFCore.utils import getToolByName
from Products.Five import BrowserView

from Products.CMFPlone.i18nl10n import monthname_english, monthname_msgid, \
                                       monthname_msgid_abbr, weekdayname_msgid, \
                                       weekdayname_english \



class CalendarHelperView(BrowserView):
    def month_name(self, month_no):
        return translate(monthname_msgid(str(month_no)),
                         'plonelocales',
                          context=self.request,
                          default=monthname_english(month_no))


    def day_name(self, day_no):
        if day_no == 6:
            day_no = 0
        else:
            day_no +=1
        return translate(weekdayname_msgid(str(day_no)),
                         'plonelocales',
                          context=self.request,
                          default=weekdayname_english(day_no))
