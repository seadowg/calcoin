#!/bin/bash

docker run -v $(pwd):/calcoin -it --entrypoint /bin/bash --workdir /calcoin seadowg/calcoin
echo 'y' | docker container prune
