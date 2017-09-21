(function() {
	function query(text) {
		fetch(
      '/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/graphql'
        },
        body: text
      }
    )
			.then(res => res.json())
			.then(data => alert(JSON.stringify(data, null, 2)))
			.catch(e => alert(e));
  }
  
  var queryText = document.querySelector('#query-text');

  queryText.value = [
    '{',
    '  hello',
    '  # id, name, age, sex',
    '  user {',
    '    name,',
    '    age',
    '  }',
    '}'
  ].join('\n');

	document.querySelector('#query-btn').addEventListener('click', () => {
    query(queryText.value);
  }, false);
})();