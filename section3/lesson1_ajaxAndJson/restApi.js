'use strict'

let cache = []
let commentsCache = []
let usersCache = {}


$('#editPostForm').hide()


$.get('http://jsonplaceholder.typicode.com/posts', placeIdOnPage)
$.get('http://jsonplaceholder.typicode.com/comments', function(comments) {
  comments.forEach(function(comment) {
    commentsCache.push(comment)
  })
})
$.get('http://jsonplaceholder.typicode.com/users', function(users) {
  users.forEach(function(user) {
    usersCache[user.name] = user
  })
})

function placeIdOnPage(posts) {
  cache = []
  posts.forEach(function(post) {
    cache.push(post)
  })
  showTitles()
}

function showTitles() {
  cache.forEach(function(post) {
    $('#output').append('<span id="' + JSON.stringify(post.id) + '">' + JSON.stringify(post.title).replace(/"/g, '') + '</span><br>')
  })
}

let thisId
function showPost(e) {
  $('#postForm').hide()
  thisId = $(this).attr('id')
  let post = cache[thisId - 1]
  $('#output').html(JSON.stringify(post).replace(/"/g, ''))

  if (currentUser) {
    $('#editPostForm').show()
  }

  commentsCache.forEach(function(comment) {
    if (comment.postId == thisId) {
      $('#output').append(JSON.stringify(comment.body).replace(/"/g, ''), '<br>')
    }
  })

  for (let user in usersCache) {
    if (usersCache[user].id === post.userId) {
      $('#output').append('<strong> By ' + JSON.stringify(usersCache[user].name).replace(/"/g, ''), '</strong><br>')
    }
  }


  $('#output').append('<h2 id="back">Back to Index</h2>')
  $('#back').css({'color': '#9b59b6'})
  e.preventDefault()
}



$(document).on('click', 'span', showPost)
$(document).on('click', '#back', function(e) {
  e.preventDefault()
  $('#output').empty()
  if (filter === 0) {
    showTitles()
  }
  else {
    filterPosts()
  }
  if (currentUser) {

    $('#postForm').show()
  }
})

let currentUser
function logIn(e) {
  console.log($('form').serializeArray())
  let username = $('#username').val()
  let password = $('#password').val()
  for (let key in usersCache) {
    if (key === username && usersCache[key].address.zipcode === password) {
      $('#top').html('<strong>Welcome, ' + key + '</strong>')
      .append('<p id="posts"> See your posts </p>')
      currentUser = usersCache[key].id
    }
  }
  $('#postForm').show()
  e.preventDefault()
}
$('#submit').click(logIn)
$(document).on('click', '#posts', filterPosts)

let filter = 0
function filterPosts() {
  let filteredPosts = cache.filter(post => post.userId == currentUser)
  $('#output').empty()
  filteredPosts.forEach(function(post) {
    $('#output').append('<span id="' + post.id + '">' + post.title + '<br>')
  })
  filter = 1
}

// Making a new post
$('#postForm').hide()

$(document).on('click', '#submitPost', function(e) {
  e.preventDefault()
  let postData = {
    userId: currentUser,
    title: $('#title').val(),
    body: $('#body').val()
  }
  let url = 'http://jsonplaceholder.typicode.com/posts'
  $.post(url, postData, function(response, status) {
    console.log(JSON.stringify(response), status)
    $('#postForm')[0].reset()
  })
})

function editPost(e) {
  e.preventDefault()
  let patchData = {
    userId: currentUser,
    id: thisId,
    title: $('#newTitle').val(),
    body: $('#newBody').val()
  }
  console.log(thisId)
  let url = 'http://jsonplaceholder.typicode.com/posts/' + thisId
  console.log(url)
  $.ajax({url: url, type: 'PATCH', data: patchData, function(response, status) {

    console.log(JSON.stringify(response), status)
    $('#editPostForm')[0].reset()
  }})
}
$(document).on('click', '#submitPostChange', editPost)

/* for (i = 1; i <= 10; i++) {
  $.get('http://jsonplaceholder.typicode.com/posts/' + i, placePostOnPage)
}
function placePostOnPage(post) {
  $('#output').append(JSON.stringify(post) + '<br>')
}
*/
