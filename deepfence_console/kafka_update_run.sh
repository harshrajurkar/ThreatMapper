#!/bin/bash

set -x 

POD_NUMBER=${POD_NAME##*-}

if [ ! -z "$POD_NUMBER" ]
then
    echo "were are inside kuberntes, update kafka config vars"
    KAFKA_NODE_ID=$((POD_NUMBER+1))
    KAFKA_BROKER_ID=$((POD_NUMBER+1))
    KAFKA_LISTENERS="PLAINTEXT://:9092,CONTROLLER://:9093"
    KAFKA_ADVERTISED_LISTENERS="PLAINTEXT://kafka-$POD_NUMBER.$SERVICE.$NAMESPACE.svc:9092"

    KAFKA_CONTROLLER_QUORUM_VOTERS=""
    for i in $( seq 0 $REPLICAS); do
        if [[ $i != $REPLICAS ]]; then
            KAFKA_CONTROLLER_QUORUM_VOTERS="$KAFKA_CONTROLLER_QUORUM_VOTERS$((i+1))@kafka-$i.$SERVICE.$NAMESPACE.svc:9093,"
        else
            KAFKA_CONTROLLER_QUORUM_VOTERS=${KAFKA_CONTROLLER_QUORUM_VOTERS::-1}
        fi
    done
else
    echo "looks like we are not inside kubernetes use default kafka vars"
fi


# Docker workaround: Remove check for KAFKA_ZOOKEEPER_CONNECT parameter
sed -i '/KAFKA_ZOOKEEPER_CONNECT/d' /etc/confluent/docker/configure

# Docker workaround: Ignore cub zk-ready
sed -i 's/cub zk-ready/echo ignore zk-ready/' /etc/confluent/docker/ensure

# format storage
echo "kafka-storage format --ignore-formatted -t ${STORAGE_UUID} -c /etc/kafka/kafka.properties" >> /etc/confluent/docker/ensure

bash -c "/etc/confluent/docker/run"