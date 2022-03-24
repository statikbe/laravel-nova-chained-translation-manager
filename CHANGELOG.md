# Changelog

All notable changes to the Laravel __Nova Chained Translation Manager__ will be documented in this file.

## Version 2.0.0
### Changed
- Laravel 9 support

## Version 1.4.1
### Changed
- Improved the labels of the translations, so that html escaped chars are properly rendered and removed ellipsis after strings smaller than 100 chars.
- Fix unnecessary redirect to translations API

## Version 1.4.0
### Changed
- Bumped the version of the laravel-chained-translator library to fix a bug in the translation merging, see https://github.com/statikbe/laravel-chained-translator/issues/1

## Version 1.3.0
### Changed
- Bumped the version of the laravel-chained-translator library to fix a dependency injection bug, see https://github.com/statikbe/laravel-nova-chained-translation-manager/issues/7

## Version 1.2.1
### Changed
- Import error in TranslationManager
- Update readme with merge command

## Version 1.2.0
### Added
- added `ignore_groups` configuration parameter to hide translation groups from Nova UI.

## Version 1.1.0
### Added
- added configurable editor field for the translations.

## Version 1.0.0 
### Added
Initial version
