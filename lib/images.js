/**
 * Image path utilities for project content
 */

// Base paths for different project types
const PROJECT_PATHS = {
  'homelink-retrofit': '/images/homelink-retrofit',
  // Add more projects as needed
}

/**
 * Get the base path for a project's images
 * @param {string} projectName - The project name (e.g., 'homelink-retrofit')
 * @returns {string} The base image path for the project
 */
export function getProjectImagePath(projectName) {
  return PROJECT_PATHS[projectName] || `/images/${projectName}`
}

/**
 * Get a project image path (webp format)
 * @param {string} projectName - The project name
 * @param {string} imageName - The image filename without extension
 * @returns {string} Full path to the webp image
 */
export function getProjectImage(projectName, imageName) {
  return `${getProjectImagePath(projectName)}/${imageName}.webp`
}

/**
 * Get a project's original image path (png or jpg format)
 * @param {string} projectName - The project name
 * @param {string} imageName - The image filename without extension
 * @param {string} originalExt - The original file extension (png, jpg, etc.)
 * @returns {string} Full path to the original image
 */
export function getProjectOriginalImage(
  projectName,
  imageName,
  originalExt = 'png'
) {
  return `${getProjectImagePath(projectName)}/original/${imageName}.${originalExt}`
}

/**
 * Get both webp and original image paths for a project
 * @param {string} projectName - The project name
 * @param {string} imageName - The image filename without extension
 * @param {string|null} originalExt - The original file extension (png, jpg, etc.), or null if no original exists
 * @returns {object} Object with src and largeSrc properties
 */
export function getProjectImagePaths(
  projectName,
  imageName,
  originalExt = 'png'
) {
  const src = getProjectImage(projectName, imageName)
  return {
    src,
    largeSrc: originalExt
      ? getProjectOriginalImage(projectName, imageName, originalExt)
      : src,
  }
}

// Convenience functions for specific projects
export const HomelinkImages = {
  get: imageName => getProjectImage('homelink-retrofit', imageName),
  getOriginal: (imageName, originalExt = 'png') =>
    getProjectOriginalImage('homelink-retrofit', imageName, originalExt),
  getPaths: (imageName, originalExt = 'png') =>
    getProjectImagePaths('homelink-retrofit', imageName, originalExt),
}
