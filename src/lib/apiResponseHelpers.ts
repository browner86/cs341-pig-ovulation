
export const successMessage = (message: String) => {
  return {
    status: 200,
    body: {
      message,
      success: true,
    },
  };
}

export const errorMessage = (message: String) => {
  return {
    status: 401,
    body: {
      message,
      success: false,
    },
  };
}

export const successBody = (body) => {
  return {
    status: 200,
    body,
  };
}

export const errorBody = (body) => {
  return {
    status: 401,
    body,
  };
}

export default {
  errorBody,
  errorMessage,
  successBody,
  successMessage,
}

