import os
from PIL import Image, ImageEnhance, ImageFilter

def process_gym_image(input_path, output_path):
    print(f"Processing {input_path} -> {output_path}...")
    img = Image.open(input_path).convert("RGB")
    
    # 1. Enhance contrast (gym photos look better with high contrast, dark shadows, and glowing lights)
    contrast = ImageEnhance.Contrast(img)
    img = contrast.enhance(1.2)  # boost contrast by 20%
    
    # 2. Enhance sharpness
    img = img.filter(ImageFilter.SHARPEN)
    
    # 3. Slightly adjust brightness to make it look moody and ensure high text readability
    brightness = ImageEnhance.Brightness(img)
    img = brightness.enhance(0.85)  # slightly darken to 85%
    
    # 4. Enhance color saturation slightly to make gold/orange tones pop
    color = ImageEnhance.Color(img)
    img = color.enhance(1.15)  # boost colors by 15%
    
    # Save as optimized WebP
    img.save(output_path, "WEBP", quality=85)
    print("Done!")

def process_logo(input_path, output_path):
    print(f"Processing logo {input_path} -> {output_path}...")
    img = Image.open(input_path).convert("RGBA")
    
    # Gym logos look best when extremely clean. Let's enhance contrast
    contrast = ImageEnhance.Contrast(img)
    img = contrast.enhance(1.4)
    
    # Crop to square first
    width, height = img.size
    size = min(width, height)
    left = (width - size) // 2
    top = (height - size) // 2
    right = left + size
    bottom = top + size
    img = img.crop((left, top, right, bottom))
    
    # Create an anti-aliased circular mask
    scale = 4
    mask_size = (size * scale, size * scale)
    mask = Image.new("L", mask_size, 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, mask_size[0], mask_size[1]), fill=255)
    mask = mask.resize((size, size), Image.Resampling.LANCZOS)
    
    # Apply mask
    img.putalpha(mask)
    
    # Save as optimized WebP
    img.save(output_path, "WEBP", quality=95)
    print("Done!")

if __name__ == "__main__":
    assets_dir = "/Users/mekrua/black-fitness/assets"
    
    # Process Kanchanaphisek Main
    process_gym_image(
        os.path.join(assets_dir, "kanchanaphisek.jpg"),
        os.path.join(assets_dir, "kanchanaphisek_optimized.webp")
    )
    
    # Process Kanchanaphisek Gallery
    for i in range(1, 5):
        process_gym_image(
            os.path.join(assets_dir, f"kanch_{i}.jpg"),
            os.path.join(assets_dir, f"kanch_{i}_optimized.webp")
        )
    
    # Process Bangbon 3 Main
    process_gym_image(
        os.path.join(assets_dir, "bangbon3.webp"),
        os.path.join(assets_dir, "bangbon3_optimized.webp")
    )
    
    # Process Bangbon 3 Gallery
    for i in range(1, 9):
        process_gym_image(
            os.path.join(assets_dir, f"bangbon_{i}.jpg"),
            os.path.join(assets_dir, f"bangbon_{i}_optimized.webp")
        )
    
    # Process Logo
    process_logo(
        os.path.join(assets_dir, "logo.jpg"),
        os.path.join(assets_dir, "logo_optimized.webp")
    )
    
    # Process Booth Image
    process_gym_image(
        os.path.join(assets_dir, "booth.jpg"),
        os.path.join(assets_dir, "booth_optimized.webp")
    )
