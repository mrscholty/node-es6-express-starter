import data from '../data/data.json';

let languages = [];

export function setData(data) {
    languages = data;
}

export function get() {
    return languages;
}

export function getOne(id) {
    return languages.find(item => item.id === id) || {};
}

export function add(data) {
    languages = [...languages, data];
    return languages;
}

export function update(id, data) {
    languages = languages.map(item => item.id === id ?
        {...item, name: data.name} : item
    );
    return languages.find(item => item.id === id) || {};
}

export function remove(id) {
    let itemIndex = languages.findIndex(item => item.id === id);
    let item = languages[itemIndex] || {};
    languages = [
        ...languages.slice(0, itemIndex),
        ...languages.slice(itemIndex + 1)
    ];
    return item;
}


setData(data);
