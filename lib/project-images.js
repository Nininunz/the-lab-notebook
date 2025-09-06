/**
 * Project-specific image convenience functions
 */
import {
  getProjectImage,
  getProjectOriginalImage,
  getProjectImagePaths,
} from './images.js'

// Convenience functions for specific projects
export const HomelinkImages = {
  get: (imageName, ext = 'webp') =>
    getProjectImage('homelink-retrofit', imageName, ext),
  getOriginal: (imageName, originalExt = 'png') =>
    getProjectOriginalImage('homelink-retrofit', imageName, originalExt),
  getPaths: (imageName, originalExt = 'png', srcExt = 'webp') =>
    getProjectImagePaths('homelink-retrofit', imageName, originalExt, srcExt),
}

export const E83N52Images = {
  get: (imageName, ext = 'jpg') =>
    getProjectImage('mysterious-n52-carbon-valves', imageName, ext),
  getOriginal: (imageName, originalExt = 'jpg') =>
    getProjectOriginalImage(
      'mysterious-n52-carbon-valves',
      imageName,
      originalExt
    ),
  getPaths: (imageName, originalExt = null, srcExt = 'jpg') =>
    getProjectImagePaths(
      'mysterious-n52-carbon-valves',
      imageName,
      originalExt,
      srcExt
    ),
}
