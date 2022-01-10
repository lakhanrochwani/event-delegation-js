document.getElementById('parent-list').addEventListener('click', function (e) {
  console.log(e.target);
  if (e.target && e.target.nodeName == 'LI') {
    console.log(
      'List item ',
      e.target.id.replace('post-', ''),
      ' was clicked!'
    );
  }
});
