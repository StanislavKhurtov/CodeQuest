function nameShuffler(str){
    // Разделяем полное имя на имя и фамилию
    const names = str.split(' ');
    if (names.length < 2) {
        return str; // Возвращаем полное имя без изменений, если нет пробела
    }

    const firstName = names[0];
    const lastName = names[names.length - 1];

    // Меняем местами имя и фамилию
    names[0] = lastName;
    names[names.length - 1] = firstName;

    // Объединяем имена обратно в одну строку
    const swappedName = names.join(' ');

    return swappedName;
}