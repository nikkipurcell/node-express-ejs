# Axios

Server side api requests can be made using Axios.

![Axios Project](axios.png)

## What it does

Uses the https://bored-api.appbrewery.com/ website, use the /random api, capture the response and send back to user page in data object.

Example:

```
 try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    res.render("index.ejs", { data: response.data });
  } catch (error) {
    res.render("index.ejs", { error: error.message });
  }
```

It also uses a POST request to capture body data and use it as api url parameters. Then from the results we return a random item.
