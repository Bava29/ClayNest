/* =========================================================
   CLAYNEST - MAIN JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       BASIC ELEMENTS
    ===================================================== */

    const html = document.documentElement;

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNavigation =
        document.getElementById("mainNavigation");

    const dropdownToggle =
        document.querySelector(".dropdown-toggle");

    const dropdownParent =
        document.querySelector(".has-dropdown");

    const themeToggle =
        document.getElementById("themeToggle");

    const desktopThemeToggle =
        document.getElementById("desktopThemeToggle");

    const rtlToggle =
        document.getElementById("rtlToggle");

    const desktopRtlToggle =
        document.getElementById("desktopRtlToggle");


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    if (menuToggle && mainNavigation) {

        menuToggle.addEventListener("click", function () {

            const isOpen =
                mainNavigation.classList.toggle("active");

            menuToggle.classList.toggle(
                "active",
                isOpen
            );

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close menu" : "Open menu"
            );

        });

    }


    /* =====================================================
       MOBILE HOME DROPDOWN
    ===================================================== */

    if (dropdownToggle && dropdownParent) {

        dropdownToggle.addEventListener(
            "click",
            function (event) {

                if (window.innerWidth <= 991) {

                    event.preventDefault();

                    const isOpen =
                        dropdownParent.classList.toggle(
                            "dropdown-open"
                        );

                    dropdownToggle.setAttribute(
                        "aria-expanded",
                        String(isOpen)
                    );

                }

            }
        );

    }


    /* =====================================================
       CLOSE MOBILE MENU AFTER LINK CLICK
    ===================================================== */

    const navigationLinks =
        document.querySelectorAll(
            ".main-navigation a"
        );


    navigationLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                if (window.innerWidth <= 991) {

                    mainNavigation?.classList.remove(
                        "active"
                    );

                    menuToggle?.classList.remove(
                        "active"
                    );

                    dropdownParent?.classList.remove(
                        "dropdown-open"
                    );

                    menuToggle?.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    menuToggle?.setAttribute(
                        "aria-label",
                        "Open menu"
                    );

                    dropdownToggle?.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );

    });


    /* =====================================================
       OUTSIDE CLICK - MOBILE MENU
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            if (window.innerWidth > 991) {
                return;
            }

            if (
                mainNavigation &&
                menuToggle &&
                !mainNavigation.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                mainNavigation.classList.remove(
                    "active"
                );

                menuToggle.classList.remove(
                    "active"
                );

                dropdownParent?.classList.remove(
                    "dropdown-open"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open menu"
                );

            }

        }
    );


    /* =====================================================
       RESET MOBILE MENU ON DESKTOP RESIZE
    ===================================================== */

    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth > 991) {

                mainNavigation?.classList.remove(
                    "active"
                );

                menuToggle?.classList.remove(
                    "active"
                );

                dropdownParent?.classList.remove(
                    "dropdown-open"
                );

                menuToggle?.setAttribute(
                    "aria-expanded",
                    "false"
                );

                dropdownToggle?.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );


    /* =====================================================
       DARK MODE
    ===================================================== */

    const savedTheme =
        localStorage.getItem(
            "claynest-theme"
        );


    if (savedTheme === "dark") {

        html.classList.add(
            "dark-mode"
        );

    }


    function updateThemeIcon() {

        const isDark =
            html.classList.contains(
                "dark-mode"
            );


        const themeIcons =
            document.querySelectorAll(
                "#themeToggle i, #desktopThemeToggle i"
            );


        themeIcons.forEach(function (icon) {

            icon.classList.toggle(
                "fa-moon",
                !isDark
            );

            icon.classList.toggle(
                "fa-sun",
                isDark
            );

        });

    }


    function toggleDarkMode() {

        const isDark =
            html.classList.toggle(
                "dark-mode"
            );


        localStorage.setItem(
            "claynest-theme",
            isDark ? "dark" : "light"
        );


        updateThemeIcon();

    }


    themeToggle?.addEventListener(
        "click",
        toggleDarkMode
    );


    desktopThemeToggle?.addEventListener(
        "click",
        toggleDarkMode
    );


    updateThemeIcon();


    /* =====================================================
       RTL
    ===================================================== */

    const savedDirection =
        localStorage.getItem(
            "claynest-direction"
        );


    if (savedDirection === "rtl") {

        html.setAttribute(
            "dir",
            "rtl"
        );

    } else {

        html.setAttribute(
            "dir",
            "ltr"
        );

    }


    function updateRTLState() {

        const isRTL =
            html.getAttribute("dir") === "rtl";


        const mobileText =
            rtlToggle?.querySelector(
                ".action-text"
            );


        if (mobileText) {

            mobileText.textContent =
                isRTL
                    ? "LTR Mode"
                    : "RTL Mode";

        }

    }


    function toggleRTL() {

        const currentDirection =
            html.getAttribute("dir");


        const newDirection =
            currentDirection === "rtl"
                ? "ltr"
                : "rtl";


        html.setAttribute(
            "dir",
            newDirection
        );


        localStorage.setItem(
            "claynest-direction",
            newDirection
        );


        updateRTLState();

    }


    rtlToggle?.addEventListener(
        "click",
        toggleRTL
    );


    desktopRtlToggle?.addEventListener(
        "click",
        toggleRTL
    );


    updateRTLState();


    /* =====================================================
       SCROLL TO TOP
    ===================================================== */

    const scrollToTop =
        document.getElementById(
            "scrollToTop"
        );


    if (scrollToTop) {

        window.addEventListener(
            "scroll",
            function () {

                scrollToTop.classList.toggle(
                    "show",
                    window.scrollY > 400
                );

            }
        );


        scrollToTop.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* =====================================================
       ACTIVE MENU
    ===================================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .split("?")[0]
            .split("#")[0] || "index.html";


    const allNavLinks =
        document.querySelectorAll(
            ".main-navigation a"
        );


    allNavLinks.forEach(function (link) {

        const href =
            link.getAttribute("href");


        if (!href) {
            return;
        }


        const linkPage =
            href
                .split("/")
                .pop()
                .split("?")[0]
                .split("#")[0];


        if (
            linkPage &&
            linkPage === currentPage
        ) {

            link.classList.add(
                "active"
            );


            const parentDropdown =
                link.closest(
                    ".has-dropdown"
                );


            if (parentDropdown) {

                parentDropdown.classList.add(
                    "dropdown-active"
                );


                const parentToggle =
                    parentDropdown.querySelector(
                        ".dropdown-toggle"
                    );


                parentToggle?.classList.add(
                    "active"
                );

            }

        }

    });


    /* =====================================================
       PRODUCT FILTER
       ===================================================== */

    const productGrid =
        document.querySelector(
            ".products-grid"
        );


    if (productGrid) {

        const productCards =
            Array.from(
                productGrid.querySelectorAll(
                    ".product-card"
                )
            );


        const categoryInputs =
            Array.from(
                document.querySelectorAll(
                    'input[name="product-type"]'
                )
            );


        const materialInputs =
            Array.from(
                document.querySelectorAll(
                    'input[name="material"]'
                )
            );


        const sizeInputs =
            Array.from(
                document.querySelectorAll(
                    'input[name="size"]'
                )
            );


        const availabilityInputs =
            Array.from(
                document.querySelectorAll(
                    'input[name="availability"]'
                )
            );


        const priceRange =
            document.getElementById(
                "price-range"
            );


        const priceValues =
            document.querySelector(
                ".price-values"
            );


        const applyButton =
            document.querySelector(
                ".apply-filters"
            );


        const clearButton =
            document.querySelector(
                ".clear-filters"
            );


        const productCount =
            document.querySelector(
                ".product-count strong"
            );


        const catalogCount =
            document.querySelector(
                ".catalog-count"
            );


        /* =================================================
           HELPER:
           GET CHECKED VALUES
        ================================================= */

        function getCheckedValues(
            inputs
        ) {

            return inputs
                .filter(function (input) {

                    return input.checked;

                })
                .map(function (input) {

                    return (
                        input.value || ""
                    )
                        .trim()
                        .toLowerCase();

                });

        }


        /* =================================================
           PRICE DISPLAY
        ================================================= */

        function updatePriceDisplay() {

            if (
                !priceRange ||
                !priceValues
            ) {

                return;

            }


            const min =
                Number(priceRange.min) || 1000;


            const max =
                Number(priceRange.value) || 8000;


            const spans =
                priceValues.querySelectorAll(
                    "span"
                );


            if (spans.length >= 2) {

                spans[0].textContent =
                    `₹${min.toLocaleString("en-IN")}`;

                spans[1].textContent =
                    `₹${max.toLocaleString("en-IN")}`;

            } else {

                priceValues.innerHTML = `
                    <span>
                        ₹${min.toLocaleString("en-IN")}
                    </span>

                    <span>
                        ₹${max.toLocaleString("en-IN")}
                    </span>
                `;

            }

        }


        /* =================================================
           ACTIVE CATEGORY
        ================================================= */

        function updateCategoryActiveState() {

            categoryInputs.forEach(
                function (input) {

                    const option =
                        input.closest(
                            ".intent-option"
                        );


                    if (option) {

                        option.classList.toggle(
                            "active",
                            input.checked
                        );

                    }

                }
            );

        }


        /* =================================================
           UPDATE COUNTS
        ================================================= */

        function updateCounts(
            count
        ) {

            if (productCount) {

                productCount.textContent =
                    count;

            }


            if (catalogCount) {

                catalogCount.textContent =
                    `${count} Products`;

            }

        }


        /* =================================================
           NO RESULT MESSAGE
        ================================================= */

        function removeNoResults() {

            const message =
                productGrid.querySelector(
                    ".no-products"
                );


            if (message) {

                message.remove();

            }

        }


        function showNoResults() {

            removeNoResults();


            const message =
                document.createElement(
                    "div"
                );


            message.className =
                "no-products";


            message.innerHTML = `
                <div class="no-products-icon">
                    <i class="fa-regular fa-face-frown"></i>
                </div>

                <h3>
                    No products found
                </h3>

                <p>
                    Try changing your filters
                    to discover more products.
                </p>
            `;


            productGrid.appendChild(
                message
            );

        }


        /* =================================================
           FILTER FUNCTION
        ================================================= */

        function filterProducts() {

            /* ---------------------------------------------
               CATEGORY
            --------------------------------------------- */

            const checkedCategory =
                document.querySelector(
                    'input[name="product-type"]:checked'
                );


            const selectedCategory =
                checkedCategory
                    ? (
                        checkedCategory.value || ""
                    )
                        .trim()
                        .toLowerCase()
                    : "all";


            /* ---------------------------------------------
               MATERIAL
            --------------------------------------------- */

            const selectedMaterials =
                getCheckedValues(
                    materialInputs
                );


            /* ---------------------------------------------
               SIZE
            --------------------------------------------- */

            const selectedSizes =
                getCheckedValues(
                    sizeInputs
                );


            /* ---------------------------------------------
               AVAILABILITY
            --------------------------------------------- */

            const selectedAvailability =
                getCheckedValues(
                    availabilityInputs
                );


            /* ---------------------------------------------
               PRICE
            --------------------------------------------- */

            const maximumPrice =
                priceRange
                    ? Number(
                        priceRange.value
                    )
                    : 8000;


            let visibleCount = 0;


            /* ---------------------------------------------
               LOOP THROUGH ACTUAL PRODUCT CARDS
            --------------------------------------------- */

            productCards.forEach(
                function (card) {

                    const category =
                        (
                            card.getAttribute(
                                "data-category"
                            ) || ""
                        )
                            .trim()
                            .toLowerCase();


                    const material =
                        (
                            card.getAttribute(
                                "data-material"
                            ) || ""
                        )
                            .trim()
                            .toLowerCase();


                    const size =
                        (
                            card.getAttribute(
                                "data-size"
                            ) || ""
                        )
                            .trim()
                            .toLowerCase();


                    const availability =
                        (
                            card.getAttribute(
                                "data-availability"
                            ) || ""
                        )
                            .trim()
                            .toLowerCase();


                    const price =
                        Number(
                            card.getAttribute(
                                "data-price"
                            )
                        );


                    /* -------------------------------------
                       CATEGORY
                    ------------------------------------- */

                    const categoryMatch =
                        selectedCategory === "all" ||
                        category === selectedCategory;


                    /* -------------------------------------
                       MATERIAL
                    ------------------------------------- */

                    const materialMatch =
                        selectedMaterials.length === 0 ||
                        selectedMaterials.includes(
                            material
                        );


                    /* -------------------------------------
                       SIZE
                    ------------------------------------- */

                    const sizeMatch =
                        selectedSizes.length === 0 ||
                        selectedSizes.includes(
                            size
                        );


                    /* -------------------------------------
                       AVAILABILITY
                    ------------------------------------- */

                    const availabilityMatch =
                        selectedAvailability.length === 0 ||
                        selectedAvailability.includes(
                            availability
                        );


                    /* -------------------------------------
                       PRICE
                    ------------------------------------- */

                    const priceMatch =
                        !Number.isNaN(price) &&
                        price <= maximumPrice;


                    /* -------------------------------------
                       FINAL RESULT
                    ------------------------------------- */

                    const matches =
                        categoryMatch &&
                        materialMatch &&
                        sizeMatch &&
                        availabilityMatch &&
                        priceMatch;


                    /* -------------------------------------
                       SHOW / HIDE
                    ------------------------------------- */

                    if (matches) {

                        card.style.setProperty(
                            "display",
                            "",
                            "important"
                        );

                        visibleCount++;

                    } else {

                        card.style.setProperty(
                            "display",
                            "none",
                            "important"
                        );

                    }

                }
            );


            /* ---------------------------------------------
               UPDATE UI
            --------------------------------------------- */

            updateCategoryActiveState();

            updateCounts(
                visibleCount
            );


            if (visibleCount === 0) {

                showNoResults();

            } else {

                removeNoResults();

            }

        }


        /* =================================================
           CATEGORY SELECTION
        ================================================= */

        categoryInputs.forEach(
            function (input) {

                input.addEventListener(
                    "change",
                    function () {

                        /*
                         Only change the active visual state.
                         Actual filtering happens on Apply.
                        */

                        updateCategoryActiveState();

                    }
                );

            }
        );


        /* =================================================
           PRICE SLIDER
        ================================================= */

        if (priceRange) {

            priceRange.addEventListener(
                "input",
                function () {

                    updatePriceDisplay();

                }
            );

        }


        /* =================================================
           APPLY FILTERS
        ================================================= */

        if (applyButton) {

            applyButton.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    filterProducts();

                }
            );

        }


        /* =================================================
           CLEAR ALL
        ================================================= */

        if (clearButton) {

            clearButton.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();


                    /* -------------------------------------
                       CATEGORY = ALL
                    ------------------------------------- */

                    const allCategory =
                        document.querySelector(
                            'input[name="product-type"][value="all"]'
                        );


                    categoryInputs.forEach(
                        function (input) {

                            input.checked =
                                input === allCategory;

                        }
                    );


                    /* -------------------------------------
                       MATERIAL
                    ------------------------------------- */

                    materialInputs.forEach(
                        function (input) {

                            input.checked =
                                false;

                        }
                    );


                    /* -------------------------------------
                       SIZE
                    ------------------------------------- */

                    sizeInputs.forEach(
                        function (input) {

                            input.checked =
                                false;

                        }
                    );


                    /* -------------------------------------
                       AVAILABILITY
                    ------------------------------------- */

                    availabilityInputs.forEach(
                        function (input) {

                            input.checked =
                                false;

                        }
                    );


                    /* -------------------------------------
                       PRICE
                    ------------------------------------- */

                    if (priceRange) {

                        priceRange.value =
                            priceRange.max || 8000;

                        updatePriceDisplay();

                    }


                    /* -------------------------------------
                       APPLY RESET
                    ------------------------------------- */

                    filterProducts();

                }
            );

        }


        /* =================================================
           INITIAL STATE
        ================================================= */

        const allCategory =
            document.querySelector(
                'input[name="product-type"][value="all"]'
            );


        if (allCategory) {

            allCategory.checked =
                true;

        }


        materialInputs.forEach(
            function (input) {

                input.checked =
                    false;

            }
        );


        sizeInputs.forEach(
            function (input) {

                input.checked =
                    false;

            }
        );


        availabilityInputs.forEach(
            function (input) {

                input.checked =
                    false;

            }
        );


        if (priceRange) {

            priceRange.value =
                priceRange.max || 8000;

        }


        updatePriceDisplay();

        updateCategoryActiveState();

        filterProducts();


        /* =================================================
           WISHLIST
        ================================================= */

        const wishlistButtons =
            productGrid.querySelectorAll(
                ".product-wishlist"
            );


        wishlistButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();

                        event.stopPropagation();


                        const icon =
                            button.querySelector(
                                "i"
                            );


                        if (!icon) {
                            return;
                        }


                        const active =
                            button.classList.toggle(
                                "wishlist-active"
                            );


                        icon.classList.toggle(
                            "fa-regular",
                            !active
                        );


                        icon.classList.toggle(
                            "fa-solid",
                            active
                        );

                    }
                );

            }
        );

    }


    /* =====================================================
       PASSWORD VISIBILITY
    ===================================================== */

    const passwordToggles =
        document.querySelectorAll(
            ".password-toggle"
        );


    passwordToggles.forEach(
        function (toggle) {

            toggle.addEventListener(
                "click",
                function () {

                    const targetId =
                        toggle.getAttribute(
                            "data-target"
                        );


                    const input =
                        document.getElementById(
                            targetId
                        );


                    const icon =
                        toggle.querySelector(
                            "i"
                        );


                    if (!input || !icon) {
                        return;
                    }


                    if (
                        input.type ===
                        "password"
                    ) {

                        input.type =
                            "text";


                        icon.classList.remove(
                            "fa-eye"
                        );


                        icon.classList.add(
                            "fa-eye-slash"
                        );

                    } else {

                        input.type =
                            "password";


                        icon.classList.remove(
                            "fa-eye-slash"
                        );


                        icon.classList.add(
                            "fa-eye"
                        );

                    }

                }
            );

        }
    );

});