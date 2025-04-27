#!/bin/bash

# Directory containing icon components
ICONS_DIR="/home/wanderlee/Projects/fastty-chat/apps/web/components/icons"

# Iterate through all .tsx files in the icons directory
for file in "$ICONS_DIR"/*.tsx; do
    # Replace import statement
    sed -i 's|import { SVGProps } from "../types/SvgProps.type";|import { SVGProps } from "./SvgProps.type";|g' "$file"
done

echo "Updated all icon components to use local SvgProps type"