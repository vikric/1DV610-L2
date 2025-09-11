
export class HTTPHelper{


  async get(url) {   
    try {
      const request = await fetch(url, {
        method: "GET",
        headers: this.headers
      })
      if (!request.ok) {
        throw new Error('Fetch failed', request.statusText)
      }
      const response = await request.json()
      console.log(response)
      return (response)

    } catch (err) {
      throw new Error(err.message);
    }
  }

    async post(url, body) {   
      try {
        const request = await fetch(url, {
          method: "POST",
          body: JSON.stringify(body),
          headers: this.setHeaders()
          })
        if (!request.ok) {
          throw new Error('Fetch failed', request.statusText)
        }
        const response = await request.json()
        console.log(response)
        return (response)

      } catch (err) {
        throw new Error(err.message);
      }
    }

    async patch(url, body) {   
    try {
        const request = await fetch(url, {
          method: "PATCH",
          body: JSON.stringify(body),
          headers: this.headers

        })
      if (!request.ok) {
        throw new Error('Fetch failed', request.statusText)
      }
      const response = await request.json()
      console.log(response)
      return (response)

    } catch (err) {
      throw new Error(err.message);
    }
  }

  async delete(url) {   
    try {
      const request = await fetch(url, {
        method: "Delete",
        headers: this.headers
      })
      if (!request.ok) {
        throw new Error('Fetch failed', request.statusText)
      }
      const response = await request.json()
      if (response) {
      console.log(response)
      return (response)
      }
      // Returns request status if their isn't a response
      return request.status
    } catch (err) {
      throw new Error(err.message);
    }
  }

    setHeaders(headers = {'Content-type': 'application/json; charset=UTF-8'}){
      return {...this.headers, ...headers}

  }


}