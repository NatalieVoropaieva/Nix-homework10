const objects = {

}

function isEmpty(obj) {
    for(let prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}

isEmpty(objects);