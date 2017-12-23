export const schema = {
    "type": "object",
    "properties": {
      "users": { //main object contains a property users
        "type": "array", // which is an array
        "minItems": 3,
        "maxItems": 5,
        "items": {
          "type": "object", // what kind of object class this array will have
          "properties": {
            "id": {
              "type": "number",
              "unique": true,
              "minimum": 1
            },
            "firstName": {
              "type": "string",
              "faker": "name.firstName"
            },
            "lastName": {
              "type": "string",
              "faker": "name.lastName"
            },
            "email": {
              "type": "string",
              "faker": "internet.email"
            }
          },
          "required": ["id", "firstName", "lastName", "email"]
        }
      }
    },
    "required": ["users"]
  };
