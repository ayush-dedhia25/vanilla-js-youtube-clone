class Router {
  /** @type {(string[] | null)} */
  #routeHistory = null;

  constructor() {
    if (this.#routeHistory == null) {
      this.#routeHistory = [];
      console.log("Route history initialized");
    }
  }

  /**
   * @param {string} route
   */
  navigateTo(route) {
    window.location.hash = route;
    this.#routeHistory.push(route);
  }

  goBack() {
    if (this.#routeHistory.length > 1) {
      this.#routeHistory.pop();
      const previousHash = this.#routeHistory[this.#routeHistory.length - 1];
      this.navigateTo(previousHash);
    }
  }
}

export default Router;
