# star-wars
Todo List: 
- Test
- Use server components for components that don't do fetches

Features used: 
- Cached response with revalidate of 1 hour.
- *use* hook + suspense

SWAPI has the following problems: 
1) Does not include images.
2) When you're trying to include your own images, some images might not be available.
3) Starships have an specific id, which is not increasing and ordered (e.g. the first entry has id 2, the second 3 and the third might be 5 for example)
