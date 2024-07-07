# ROUTES

Place all API route handlers here.

Ideally, the route handlers will accept the incoming request, pass the body or params to another MODULE function for processing, and then pass the returned value into the response. The handler should only be concerned with creating the response.

```js
// GET api/widgets/
router.get('/', async (req, res) => {
    const payload = req.body;
    // handle the payload in the MODULES
    // This could be anything: validation, DB update, external API call, etc
    const response = await getWidgets(payload);
    if(response) {
        res.send(response);
    } else {
        res.status(404).send('Widgets not found.');
    }
});

```