export const successToast = (title, description, toast) =>
  toast({
    title: title,
    description: description,
    status: 'success',
    duration: 9000,
    isClosable: true,
  });

export const errorToast = (title, description, toast) =>
  toast({
    title: title,
    description: description,
    status: 'error',
    duration: 9000,
    isClosable: true,
  });
