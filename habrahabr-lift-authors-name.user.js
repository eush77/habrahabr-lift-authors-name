// ==UserScript==
// @name        Habrahabr: Lift Author's Name
// @version     0.2
// @description Inserts author's name in the date panel at the top of every post.
// @match       http://habrahabr.ru/*
// ==/UserScript==

[].slice.call(document.getElementsByClassName('post')).forEach(function(post) {
    var author = post.getElementsByClassName('author')[0];
    // Some "special posts" do not have infopanel_wrapper element
    if (author) {
        author = author.firstElementChild.textContent;
        post.firstElementChild.insertAdjacentHTML('afterBegin', author + ', ');
    }
});
