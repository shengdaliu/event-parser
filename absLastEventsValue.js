function absLastTwoBiggestValueEvents(events) {
    var last_two = {}

    events.forEach(current_event => {
        if (!last_two[current_event.event_type]) {
            last_two[current_event.event_type] = {
                biggest: {
                    value: 0,
                    time: 0
                },
                second_biggest: {
                    value: 0,
                    time: 0
                }
            }
        }

        // Si la valeur de l'event actuel est supérieur à la plus grande des stockées alors remplacer par celle-ci :
        if (current_event.value > last_two[current_event.event_type].biggest.value) {
            last_two[current_event.event_type].second_biggest.value = last_two[current_event.event_type].biggest.value;
            last_two[current_event.event_type].second_biggest.time = last_two[current_event.event_type].biggest.time;
            last_two[current_event.event_type].biggest.value = current_event.value;
            last_two[current_event.event_type].biggest.time = current_event.time;
        } // Sinon comparer a la seconde :
        else if (current_event.value > last_two[current_event.event_type].second_biggest.value) {
            last_two[current_event.event_type].second_biggest.value = current_event.value;
            last_two[current_event.event_type].second_biggest.time = current_event.time;
        }
    });

    for (key in last_two) {
        if (last_two[key].second_biggest.time !== 0)
            last_two[key].abs = Math.abs(last_two[key].biggest.value - last_two[key].second_biggest.value)
    };

    return last_two;
}

function absLastTwoValueEvents(events) {
    var last_two = {}

    events.forEach(current_event => {
        if (!last_two[current_event.event_type]) {
            last_two[current_event.event_type] = {
                last: {
                    value: 0,
                    time: 0
                },
                before_last: {
                    value: 0,
                    time: 0
                }
            }
        }

        // Si l'event actuel est passé après les deux stockés
        if (current_event.time > last_two[current_event.event_type].last.time) {
            last_two[current_event.event_type].before_last.value = last_two[current_event.event_type].last.value;
            last_two[current_event.event_type].before_last.time = last_two[current_event.event_type].last.time;
            last_two[current_event.event_type].last.value = current_event.value;
            last_two[current_event.event_type].last.time = current_event.time;
        } // si l'event est entre les deux
        else if (current_event.time > last_two[current_event.event_type].before_last.time) {
            last_two[current_event.event_type].before_last.value = current_event.value;
            last_two[current_event.event_type].before_last.time = current_event.time;
        }
    });

    for (key in last_two) {
        if (last_two[key].before_last.time !== 0)
            last_two[key].abs = Math.abs(last_two[key].last.value - last_two[key].before_last.value)
    };

    return last_two;
}

module.exports = { absLastTwoValueEvents, absLastTwoBiggestValueEvents }