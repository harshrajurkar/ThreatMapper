VERSION=`git describe --tags`

all: deepfence_bootstrapper

local: deepfence_bootstrapper

prepare:
	docker run --rm -i -v $(ROOT_MAKEFILE_DIR):/src:rw -v /tmp/go:/go:rw deepfenceio/deepfence_builder_ce:$(DF_IMG_TAG) bash -c 'cd /src/deepfence_bootstrapper && make deepfence_bootstrapper'

vendor: go.mod $(shell find ../deepfence_utils -path ../deepfence_utils/vendor -prune -o -name '*.go')
	go mod tidy -v
	go mod vendor

deepfence_bootstrapper: vendor $(shell find . -path ./vendor -prune -o -name '*.go')
	CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w -X main.Version=${VERSION} -extldflags=-static" -buildvcs=false
	-upx ./deepfence_bootstrapper

clean:
	-rm deepfence_bootstrapper
	-rm -rf ./vendor

.PHONY: clean image local all
