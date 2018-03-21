/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

export interface Schema {
  /**
   * The name of the library. Required field.
   */
  name: string;
  /**
   * The path to create the interface.
   */
  entryFile: string;
  /**
   * Do not add dependencies to package.json (e.g., --skipPackageJson)
   */
  skipPackageJson: boolean;
}
