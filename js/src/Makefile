SRC = ./main.js
COMBINE = ../class.js
COMPRESS = ../class.min.js
COMPRESSTEMP = ../_class.min.js

$(COMBINE) : $(SRC)
	cat $^ > $@

	growlnotify -t 'auto-make' -m 'make start.'
	((java -jar /Applications/gcc/compiler.jar --compilation_level ADVANCED_OPTIMIZATIONS --output_wrapper "//class.js v1.0(c)2013 Atsushi Mizoue\n%output%" --js $(COMBINE) --js_output_file $(COMPRESS)) && growlnotify -t 'auto-make' -m 'make complete.') || growlnotify -t 'auto-make' -m 'make error.'
#	rm -f $(COMBINE)
	perl -pe 's/\n//g' ${COMPRESS} > ${COMPRESSTEMP}
	perl -pe 's/;}/}/g' ${COMPRESSTEMP} > ${COMPRESS}
	perl -pe 's/\\n/\n/g' ${COMPRESS} > ${COMPRESSTEMP}
	cp -rf ${COMPRESSTEMP} ${COMPRESS}
	rm -rf ${COMPRESSTEMP}

.PHONY: clean
clean :
	rm -f $(COMBINE) $(COMPRESS)
