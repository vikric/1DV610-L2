/**
 *
 */
export class CreateResult {
  /**
   *
   * @param valid
   * @param message
   */
  createResult (valid, message) {
    return {
      valid,
      message: valid ? `✅ ${message}` : `❌ ${message}`
    }
  }
}
