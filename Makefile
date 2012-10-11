all: compile_markdown insert_css

compile_markdown:
	slideshow -t impress.js kaikifs.js.md

insert_css: css
	./insert_kaikifs.css.sh

css:
	sass kaikifs.css.scss kaikifs.css
