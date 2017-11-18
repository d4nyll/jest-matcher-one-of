expect.extend({
  toBeOneOf(received, argument) {
    if(!Array.isArray(argument)) {
      argument = [argument];
    }
    const pass = argument.includes(received);
    if (pass) {
      return {
        message: () => (
          `expected ${received} not to be one of [${argument.join(', ')}]`
        ),
        pass: true,
      };
    } else {
      return {
        message: () => (`expected ${received} to be one of [${argument.join(', ')}]`),
        pass: false,
      };
    }
  },
});
