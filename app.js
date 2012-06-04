enyo.kind({
	name: "App",
	kind: enyo.Control,
	components: [
        {
			name: "calendar",
			kind: "wijmo.wijcal",
			settings: { monthCols: 1 },
			onAfterSelect: "dateChanged",
			onBeforeSlide: "beforeSlide"
		},
		{ name: "picked" },
		{ kind: "Button", content: "Select Today", onclick: "selectToday"},
		{ kind: "Button", content: "Unselect All", onclick: "unselectAll"}
	],
	create: function() {
		this.inherited(arguments);
		this.$.calendar.title = enyo.bind(this, "title");
	},
	dateChanged: function(inSender, date) {
		this.$.picked.setContent(date.toString());
	},
	title: function(inSender) {
		var date = this.$.calendar.getDisplayDate();
		return(date.toString());
	},
	beforeSlide: function(inSender) {
		return(true);
	},
	selectToday: function(inSender) {
		this.$.calendar.selectDate(new Date());
	},
	unselectAll: function(inSender) {
		this.$.calendar.unSelectAll();
	}
	
});