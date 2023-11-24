const { isValidateSAPhoneNumber } = require('./index');

describe('isValidateSAPhoneNumber function', () => {
  test('should return true for a valid South African phone number with +27', () => {
    const result = isValidateSAPhoneNumber('+27731633190');
    expect(result).toBe(true);
  });

  test('should return true for a valid South African phone number with 0', () => {
    const result = isValidateSAPhoneNumber('0731633190');
    expect(result).toBe(true);
  });

  test('should return false for an invalid South African phone number', () => {
    const result = isValidateSAPhoneNumber('123456789');
    expect(result).toBe(false);
  });

  test('should return false for an empty string', () => {
    const result = isValidateSAPhoneNumber('');
    expect(result).toBe(false);
  });

  test('should return false for a non-string input', () => {
    const result = isValidateSAPhoneNumber(123456789);
    expect(result).toBe(false);
  });
});
