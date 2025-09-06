/**
 * Image path utilities for project content
 */
import { PROJECT_PATHS } from './image-paths.js'

/**
 * Get the base path for a project's images
 * @param {string} projectName - The project name (e.g., 'homelink-retrofit')
 * @returns {string} The base image path for the project
 */
export function getProjectImagePath(projectName) {
  return PROJECT_PATHS[projectName] || `/images/${projectName}`
}

/**
 * Get a project image path
 * @param {string} projectName - The project name
 * @param {string} imageName - The image filename without extension
 * @param {string} ext - The file extension (webp, jpg, png, etc.)
 * @returns {string} Full path to the image
 */
export function getProjectImage(projectName, imageName, ext = 'webp') {
  return `${getProjectImagePath(projectName)}/${imageName}.${ext}`
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
 * Get both display and original image paths for a project
 * @param {string} projectName - The project name
 * @param {string} imageName - The image filename without extension
 * @param {string|null} originalExt - The original file extension (png, jpg, etc.), or null if no original exists
 * @param {string} srcExt - The display image file extension (webp, jpg, png, etc.)
 * @returns {object} Object with src and largeSrc properties
 */
export function getProjectImagePaths(
  projectName,
  imageName,
  originalExt = 'png',
  srcExt = 'webp'
) {
  const src = getProjectImage(projectName, imageName, srcExt)
  return {
    src,
    largeSrc: originalExt
      ? getProjectOriginalImage(projectName, imageName, originalExt)
      : src,
  }
}
