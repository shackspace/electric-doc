DOWNLOAD = curl -L
REPORTER = dot

SHACK_LOGO = https://github.com/shackspace/corporate-identity/raw/3eb8aba880887e5b62df14e0aa5486099dcb0104/logo/stuttgart_hackerspace__bg_white__all_path.svg
POWERSOCKET = https://github.com/shackspace/electric-doc/raw/master/powersocket.csv

prepare:
	$(DOWNLOAD) -o data/shack_logo.svg $(SHACK_LOGO)
	$(DOWNLOAD) -o data/powersocket.csv $(POWERSOCKET)

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--ui tdd

test-w:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--growl \
		--ui tdd \
		--watch
all: test
	node index

clean:
	rm -v *~

.PHONY: test test-w