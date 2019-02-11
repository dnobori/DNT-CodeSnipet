# Makefile

OPTIONS_COMPILE=-g -O2

OPTIONS_LINK=-g -O2

OBJECTS_test=program.o

OPTIONS_COMPILE=$(OPTIONS_COMPILE)
OPTIONS_LINK=$(OPTIONS_LINK)

CC=gcc


# Build Action
default:	build

build:	$(OBJECTS_test) bin/program

bin/test: obj/obj/linux/test.o obj/obj/linux/code.o
	$(CC) -m32 obj/obj/linux/test.o obj/obj/linux/code.o $(OPTIONS_LINK) -o bin/test

bin/test64: obj/obj/linux/test64.o obj/obj/linux/code64.o
	$(CC) -m64 obj/obj/linux/test64.o obj/obj/linux/code64.o $(OPTIONS_LINK) -o bin/test64

clean:
	-rm -f $(OBJECTS_test)
	-rm -f bin/test bin/test64

help:
	@echo "make"
	@echo "make install"
	@echo "make clean"


