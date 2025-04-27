#!/bin/bash

# Directory containing icon components
ICONS_DIR="/home/wanderlee/Projects/fastty-chat/apps/web/components/icons"

# Iterate through all .tsx files in the icons directory
for file in "$ICONS_DIR"/*.tsx; do
    # Check if the file already has the import
    if ! grep -q "import { SVGProps } from \"../types/SvgProps.type\";" "$file"; then
        # Add import at the top of the file
        sed -i '1i import { SVGProps } from "../types/SvgProps.type";' "$file"
    fi

    # Replace function signature to use SVGProps
    sed -i 's/export default function \([A-Z][a-zA-Z]*\)(\(.*\))/export default function \1({ ...props }: SVGProps) {/g' "$file"
done

echo "Updated all icon components with SVGProps"