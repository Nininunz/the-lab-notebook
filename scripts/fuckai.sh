#!/bin/bash

# Script to search for emojis in project files
# Excludes common directories like node_modules, dist, .git

# Colors
CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
GRAY='\033[0;90m'
RESET='\033[0m'

echo -e "${CYAN}Searching for emojis in project files...${RESET}"
echo -e "${GRAY}========================================${RESET}"
echo ""

# Initialize counter
file_count=0
total_matches=0

# Default file types
default_types=("*.ts" "*.tsx" "*.js" "*.jsx" "*.json" "*.md" "*.yml" "*.yaml" "*.sh" "*.mjs")

# Load configuration from .fuckai if it exists
ignore_patterns=()
file_types=()
exclude_types=()
use_exclude=false
if [[ -f ".fuckai" ]]; then
  while IFS= read -r line; do
    # Skip empty lines and comments
    [[ -z "$line" || "$line" =~ ^[[:space:]]*# ]] && continue

    # Check if line is a type configuration
    if [[ "$line" =~ ^type:[[:space:]]* ]]; then
      # Extract types after "type:"
      types_string="${line#type:}"
      types_string="${types_string#"${types_string%%[![:space:]]*}"}" # trim leading whitespace
      IFS=',' read -ra types <<< "$types_string"
      for type in "${types[@]}"; do
        type="${type#"${type%%[![:space:]]*}"}" # trim leading whitespace
        type="${type%"${type##*[![:space:]]}"}" # trim trailing whitespace
        file_types+=("$type")
      done
    # Check if line is an exclude configuration
    elif [[ "$line" =~ ^exclude:[[:space:]]* ]]; then
      use_exclude=true
      # Extract types after "exclude:"
      types_string="${line#exclude:}"
      types_string="${types_string#"${types_string%%[![:space:]]*}"}" # trim leading whitespace
      IFS=',' read -ra types <<< "$types_string"
      for type in "${types[@]}"; do
        type="${type#"${type%%[![:space:]]*}"}" # trim leading whitespace
        type="${type%"${type##*[![:space:]]}"}" # trim trailing whitespace
        exclude_types+=("$type")
      done
    else
      ignore_patterns+=("$line")
    fi
  done < ".fuckai"
fi

# Use default types if none specified and not using exclude
if [[ ${#file_types[@]} -eq 0 && "$use_exclude" == false ]]; then
  file_types=("${default_types[@]}")
fi

# Find all files (excluding common dirs) and search for emoji patterns
# Emoji Unicode ranges: \xF0\x9F\x80\x80 - \xF0\x9F\xBF\xBF (among others)
# This regex matches most common emojis

# Build find command with dynamic file types
find_args=(
  "."
  -not -path "*/node_modules/*"
  -not -path "*/.git/*"
  -not -path "*/dist/*"
  -not -path "*/.next/*"
  -not -path "*/coverage/*"
  -not -path "*/.pnpm-store/*"
  -type f
)

# Add file type patterns (include or exclude mode)
if [[ "$use_exclude" == true && ${#exclude_types[@]} -gt 0 ]]; then
  # Exclude mode: use ! -name for each excluded type
  for type in "${exclude_types[@]}"; do
    find_args+=( ! -name "$type" )
  done
elif [[ ${#file_types[@]} -gt 0 ]]; then
  # Include mode: use -name with -o (or)
  find_args+=( \( )
  for i in "${!file_types[@]}"; do
    if [[ $i -gt 0 ]]; then
      find_args+=( -o )
    fi
    find_args+=( -name "${file_types[$i]}" )
  done
  find_args+=( \) )
fi

find_args+=( -exec grep -l '[😀-🙏🌀-🗿🚀-🿿]' {} \; )

while IFS= read -r file; do
  # Check if file matches any ignore pattern
  skip=false
  for pattern in "${ignore_patterns[@]}"; do
    if [[ "$file" == "./$pattern" ]]; then
      skip=true
      break
    fi
  done
  [[ "$skip" == true ]] && continue

  ((file_count++))
  echo ""
  echo -e "${BLUE}File: ${YELLOW}$file${RESET}"
  echo -e "${GRAY}----------------------------------------${RESET}"
  matches=$(grep -n '[😀-🙏🌀-🗿🚀-🿿]' "$file")
  match_count=$(grep -o '[😀-🙏🌀-🗿🚀-🿿]' "$file" | wc -l | tr -d ' ')
  ((total_matches+=match_count))
  echo "$matches" | sed "s|^|  $file:|"
  echo ""
done < <(find "${find_args[@]}")

echo -e "${GRAY}========================================${RESET}"
echo -e "${GREEN}Search complete.${RESET}"
echo -e "${BLUE}Files with emojis: ${CYAN}$file_count${RESET}"
echo -e "${BLUE}Total emoji occurrences: ${CYAN}$total_matches${RESET}"
