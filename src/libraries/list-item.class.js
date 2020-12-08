/**
 * List-Item for Checkbox/Radio/Select
 */
export default class ListItem {
	next_section = ""
	value        = ""
	text         = ""

    constructor(value, text, next_section) {
		this.next_section = next_section
		this.value        = value
		this.text         = text
    }
}