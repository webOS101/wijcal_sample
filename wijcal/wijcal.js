/*
    Enyo wrapping for Wijmo's calendar widget.  For more info visit http://wijmo.com/
    Calendar documentation is available at: http://wijmo.com/wiki/index.php/Calendar
    Most calendar events are wrapped as Enyo events, with the exception of the title
    event. To implement the title callback, set the title property to a function that
    returns a string. It is also possible to set the title to string.

    Wijmo calendar widget used under the MIT license.
    Wrapped by Roy Sutton
 */

enyo.kind({
    name: "wijmo.wijcal",
    published: {
        settings: {},
        title: undefined
    },
    events: {
        onBeforeSlide: "",
        onAfterSlide: "",
        onBeforeSelect: "",
        onAfterSelect: "",
        onSelectedDatesChanged: ""
    },
    rendered: function() {
		this.inherited(arguments);
        this.settings.afterSelect = enyo.bind(this, "afterSelect");
        this.settings.beforeSelect = enyo.bind(this, "beforeSelect");
        this.settings.afterSlide = enyo.bind(this, "afterSlide");
        this.settings.beforeSlide = enyo.bind(this, "beforeSlide");
        this.settings.title = enyo.bind(this, "getTitle");
        this.settings.afterSelect = enyo.bind(this, "afterSelect");
        this.settings.selectedDateChanged = enyo.bind(this, "selectedDateChanged");
        $(this.hasNode()).wijcalendar(this.settings);
    },
    getDisplayDate: function() {
        return($(this.hasNode()).wijcalendar("getDisplayDate"));
    },
    refresh: function() {
        $(this.hasNode()).wijcalendar("refresh");
    },
    refreshDate: function(date) {
        $(this.hasNode()).wijcalendar("refreshDate", date);
    },
    getSelectedDate: function() {
        return($(this.hasNode()).wijcalendar("getSelectedDate"));        
    },
    selectDate: function(date) {
        $(this.hasNode()).wijcalendar("selectDate", date);
    },
    unSelectDate: function(date) {
        $(this.hasNode()).wijcalendar("unSelectDate", date);
    },
    unSelectAll: function() {
        $(this.hasNode()).wijcalendar("unSelectAll");
    },
    isPopupShowing: function() {
        return($(this.hasNode()).wijcalendar("isPopupShowing"));
    },
    popup: function(position) {
        return($(this.hasNode()).wijcalendar("popup", position));
    },
    popupAt: function(x,y) {
        return($(this.hasNode()).wijcalendar("popupAt", x, y));
    },
    close: function() {
        return($(this.hasNode()).wijcalendar("close"));
    },
    afterSelect: function(e, args) {
        this.doAfterSelect(args.date);
    },
    beforeSelect: function(e, args) {
        this.doBeforeSelect(args.date);
    },
    afterSlide: function(e) {
        this.doAfterSlide();
    },
    beforeSlide: function(e) {
        return(this.doBeforeSlide());
    },
    getTitle: function(e) {
        if(this.title != undefined) {
            if(typeof this.title == "string")
                return(this.title);
            if(enyo.isFunction(this.title))
                return(this.title());
        }
        return(undefined);
    },
    selectedDateChanged: function(e, args) {
        this.doSelectedDateChanged(args.dates);
    }

});