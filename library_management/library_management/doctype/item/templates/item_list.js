
frappe.listview_settings['Item'] = {
    // add fields to fetch
    add_fields: ['title'],
    // format how a field value is shown
    formatters: {
        let RaiPrefix = "HSRai";
        title(val) {
            return RaiPrefix.concat(" - ", return val.bold());
        }
    }
}
