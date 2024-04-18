class FigureManager {
    constructor() {
        this.loader = new createjs.LoadQueue();

        this.sets = [];
        this.figure = [];

        this.figureData = null;
        this.jsonLoaded = false;
        this.imagesLoaded = false;
        this.club = false;

        var el = document.getElementById("club");

        if (el) {
            this.club = el.value == "true";
        }

        this.loadJson();
        this.loadImages();
    }

    loadJson() {
        this.habbos = fetch("js/editor/figuredata.json")
            .then(response => response.json())
            .then(data => {
                this.figureData = data;
                this.jsonLoaded = true;
            })
            .catch(error => {
                console.error("Error:", error);
                debugger;
            });
    }

    loadImages() {
        this.loader.loadManifest([
            { id: "h_std_hr_3_2_0", src: "img/editor/figure/h_std_hr_3_2_0.png" },
            { id: "h_std_hrb_5_2_0", src: "img/editor/figure/h_std_hrb_5_2_0.png" },
            { id: "h_std_ha_16_2_0", src: "img/editor/figure/h_std_ha_16_2_0.png" },
            { id: "h_std_ey_6_2_0", src: "img/editor/figure/h_std_ey_6_2_0.png" },
            { id: "h_std_hrb_503_2_0", src: "img/editor/figure/h_std_hrb_503_2_0.png" },
            { id: "h_std_ch_18_2_0", src: "img/editor/figure/h_std_ch_18_2_0.png" },
            { id: "h_std_ey_3_2_0", src: "img/editor/figure/h_std_ey_3_2_0.png" },
            { id: "h_std_wa_10_2_0", src: "img/editor/figure/h_std_wa_10_2_0.png" },
            { id: "h_std_hr_32_2_0", src: "img/editor/figure/h_std_hr_32_2_0.png" },
            { id: "h_std_fa_3_2_0", src: "img/editor/figure/h_std_fa_3_2_0.png" },
            { id: "h_std_hr_6_2_0", src: "img/editor/figure/h_std_hr_6_2_0.png" },
            { id: "h_std_fc_1_2_0", src: "img/editor/figure/h_std_fc_1_2_0.png" },
            { id: "h_std_hr_29_2_0", src: "img/editor/figure/h_std_hr_29_2_0.png" },
            { id: "h_std_hr_8_2_0", src: "img/editor/figure/h_std_hr_8_2_0.png" },
            { id: "h_std_ea_2_2_0", src: "img/editor/figure/h_std_ea_2_2_0.png" },
            { id: "h_std_he_1_2_0", src: "img/editor/figure/h_std_he_1_2_0.png" },
            { id: "h_std_ey_1_2_0", src: "img/editor/figure/h_std_ey_1_2_0.png" },
            { id: "h_std_hr_506_2_0", src: "img/editor/figure/h_std_hr_506_2_0.png" },
            { id: "h_std_ea_4_2_0", src: "img/editor/figure/h_std_ea_4_2_0.png" },
            { id: "h_std_hrb_507_2_0", src: "img/editor/figure/h_std_hrb_507_2_0.png" },
            { id: "h_std_ha_6_2_0", src: "img/editor/figure/h_std_ha_6_2_0.png" },
            { id: "h_std_hrb_34_2_0", src: "img/editor/figure/h_std_hrb_34_2_0.png" },
            { id: "h_std_hr_5_2_0", src: "img/editor/figure/h_std_hr_5_2_0.png" },
            { id: "h_std_ch_1802_2_0", src: "img/editor/figure/h_std_ch_1802_2_0.png" },
            { id: "h_std_ch_801_2_0", src: "img/editor/figure/h_std_ch_801_2_0.png" },
            { id: "h_std_ch_800_2_0", src: "img/editor/figure/h_std_ch_800_2_0.png" },
            { id: "h_std_hr_33_2_0", src: "img/editor/figure/h_std_hr_33_2_0.png" },
            { id: "h_std_lg_3_2_0", src: "img/editor/figure/h_std_lg_3_2_0.png" },
            { id: "h_std_ca_7_2_0", src: "img/editor/figure/h_std_ca_7_2_0.png" },
            { id: "h_std_fa_12_2_0", src: "img/editor/figure/h_std_fa_12_2_0.png" },
            { id: "h_std_ch_16_2_0", src: "img/editor/figure/h_std_ch_16_2_0.png" },
            { id: "h_std_hr_35_2_0", src: "img/editor/figure/h_std_hr_35_2_0.png" },
            { id: "h_std_lh_1_2_0", src: "img/editor/figure/h_std_lh_1_2_0.png" },
            { id: "h_std_lg_7_2_0", src: "img/editor/figure/h_std_lg_7_2_0.png" },
            { id: "h_std_ch_504_2_0", src: "img/editor/figure/h_std_ch_504_2_0.png" },
            { id: "h_std_hrb_10_2_0", src: "img/editor/figure/h_std_hrb_10_2_0.png" },
            { id: "h_std_hrb_23_2_0", src: "img/editor/figure/h_std_hrb_23_2_0.png" },
            { id: "h_std_hrb_2_2_0", src: "img/editor/figure/h_std_hrb_2_2_0.png" },
            { id: "h_std_hrb_11_2_0", src: "img/editor/figure/h_std_hrb_11_2_0.png" },
            { id: "h_std_ch_6_2_0", src: "img/editor/figure/h_std_ch_6_2_0.png" },
            { id: "h_std_hr_508_2_0", src: "img/editor/figure/h_std_hr_508_2_0.png" },
            { id: "h_std_hd_1_2_0", src: "img/editor/figure/h_std_hd_1_2_0.png" },
            { id: "h_std_lg_6_2_0", src: "img/editor/figure/h_std_lg_6_2_0.png" },
            { id: "h_std_hr_36_2_0", src: "img/editor/figure/h_std_hr_36_2_0.png" },
            { id: "h_std_ch_205_2_0", src: "img/editor/figure/h_std_ch_205_2_0.png" },
            { id: "h_std_ey_2_2_0", src: "img/editor/figure/h_std_ey_2_2_0.png" },
            { id: "h_std_ch_803_2_0", src: "img/editor/figure/h_std_ch_803_2_0.png" },
            { id: "h_std_ey_8_2_0", src: "img/editor/figure/h_std_ey_8_2_0.png" },
            { id: "h_std_ha_11_2_0", src: "img/editor/figure/h_std_ha_11_2_0.png" },
            { id: "h_std_ch_15_2_0", src: "img/editor/figure/h_std_ch_15_2_0.png" },
            { id: "h_std_ls_1_2_0", src: "img/editor/figure/h_std_ls_1_2_0.png" },
            { id: "h_std_ha_25_2_0", src: "img/editor/figure/h_std_ha_25_2_0.png" },
            { id: "h_std_hr_202_2_0", src: "img/editor/figure/h_std_hr_202_2_0.png" },
            { id: "h_std_he_3_2_0", src: "img/editor/figure/h_std_he_3_2_0.png" },
            { id: "h_std_ch_1100_2_0", src: "img/editor/figure/h_std_ch_1100_2_0.png" },
            { id: "h_std_hr_23_2_0", src: "img/editor/figure/h_std_hr_23_2_0.png" },
            { id: "h_std_ch_507_2_0", src: "img/editor/figure/h_std_ch_507_2_0.png" },
            { id: "h_std_ch_1801_2_0", src: "img/editor/figure/h_std_ch_1801_2_0.png" },
            { id: "h_std_lg_200_2_0", src: "img/editor/figure/h_std_lg_200_2_0.png" },
            { id: "h_std_hr_16_2_0", src: "img/editor/figure/h_std_hr_16_2_0.png" },
            { id: "h_std_ca_18_2_0", src: "img/editor/figure/h_std_ca_18_2_0.png" },
            { id: "h_std_hr_27_2_0", src: "img/editor/figure/h_std_hr_27_2_0.png" },
            { id: "h_std_ca_9_2_0", src: "img/editor/figure/h_std_ca_9_2_0.png" },
            { id: "h_std_hrb_24_2_0", src: "img/editor/figure/h_std_hrb_24_2_0.png" },
            { id: "h_std_hrb_200_2_0", src: "img/editor/figure/h_std_hrb_200_2_0.png" },
            { id: "h_std_ca_10_2_0", src: "img/editor/figure/h_std_ca_10_2_0.png" },
            { id: "h_std_ch_1800_2_0", src: "img/editor/figure/h_std_ch_1800_2_0.png" },
            { id: "h_std_fa_6_2_0", src: "img/editor/figure/h_std_fa_6_2_0.png" },
            { id: "h_std_ha_8_2_0", src: "img/editor/figure/h_std_ha_8_2_0.png" },
            { id: "h_std_hr_10_2_0", src: "img/editor/figure/h_std_hr_10_2_0.png" },
            { id: "h_std_he_7_2_0", src: "img/editor/figure/h_std_he_7_2_0.png" },
            { id: "h_std_ch_105_2_0", src: "img/editor/figure/h_std_ch_105_2_0.png" },
            { id: "h_std_ls_1800_2_0", src: "img/editor/figure/h_std_ls_1800_2_0.png" },
            { id: "h_std_hrb_19_2_0", src: "img/editor/figure/h_std_hrb_19_2_0.png" },
            { id: "h_std_ea_6_2_0", src: "img/editor/figure/h_std_ea_6_2_0.png" },
            { id: "h_std_he_8_2_0", src: "img/editor/figure/h_std_he_8_2_0.png" },
            { id: "h_std_ca_19_2_0", src: "img/editor/figure/h_std_ca_19_2_0.png" },
            { id: "h_std_ch_202_2_0", src: "img/editor/figure/h_std_ch_202_2_0.png" },
            { id: "h_std_sh_3_2_0", src: "img/editor/figure/h_std_sh_3_2_0.png" },
            { id: "h_std_ey_7_2_0", src: "img/editor/figure/h_std_ey_7_2_0.png" },
            { id: "h_std_ha_1_2_0", src: "img/editor/figure/h_std_ha_1_2_0.png" },
            { id: "h_std_lg_1_2_0", src: "img/editor/figure/h_std_lg_1_2_0.png" },
            { id: "h_std_ch_100_2_0", src: "img/editor/figure/h_std_ch_100_2_0.png" },
            { id: "h_std_he_4_2_0", src: "img/editor/figure/h_std_he_4_2_0.png" },
            { id: "h_std_ch_505_2_0", src: "img/editor/figure/h_std_ch_505_2_0.png" },
            { id: "h_std_ch_1023_2_0", src: "img/editor/figure/h_std_ch_1023_2_0.png" },
            { id: "h_std_hr_501_2_0", src: "img/editor/figure/h_std_hr_501_2_0.png" },
            { id: "h_std_ch_1207_2_0", src: "img/editor/figure/h_std_ch_1207_2_0.png" },
            { id: "h_std_ha_4_2_0", src: "img/editor/figure/h_std_ha_4_2_0.png" },
            { id: "h_std_ca_3_2_0", src: "img/editor/figure/h_std_ca_3_2_0.png" },
            { id: "h_std_ch_21_2_0", src: "img/editor/figure/h_std_ch_21_2_0.png" },
            { id: "h_std_sh_1_2_0", src: "img/editor/figure/h_std_sh_1_2_0.png" },
            { id: "h_std_ch_22_2_0", src: "img/editor/figure/h_std_ch_22_2_0.png" },
            { id: "h_std_ch_9_2_0", src: "img/editor/figure/h_std_ch_9_2_0.png" },
            { id: "h_std_ca_8_2_0", src: "img/editor/figure/h_std_ca_8_2_0.png" },
            { id: "h_std_hr_507_2_0", src: "img/editor/figure/h_std_hr_507_2_0.png" },
            { id: "h_std_hr_28_2_0", src: "img/editor/figure/h_std_hr_28_2_0.png" },
            { id: "h_std_ch_203_2_0", src: "img/editor/figure/h_std_ch_203_2_0.png" },
            { id: "h_std_ha_23_2_0", src: "img/editor/figure/h_std_ha_23_2_0.png" },
            { id: "h_std_ls_1801_2_0", src: "img/editor/figure/h_std_ls_1801_2_0.png" },
            { id: "h_std_rs_2_2_0", src: "img/editor/figure/h_std_rs_2_2_0.png" },
            { id: "h_std_hr_31_2_0", src: "img/editor/figure/h_std_hr_31_2_0.png" },
            { id: "h_std_hrb_203_2_0", src: "img/editor/figure/h_std_hrb_203_2_0.png" },
            { id: "h_std_rs_1_2_0", src: "img/editor/figure/h_std_rs_1_2_0.png" },
            { id: "h_std_ha_3_2_0", src: "img/editor/figure/h_std_ha_3_2_0.png" },
            { id: "h_std_ca_4_2_0", src: "img/editor/figure/h_std_ca_4_2_0.png" },
            { id: "h_std_hr_504_2_0", src: "img/editor/figure/h_std_hr_504_2_0.png" },
            { id: "h_std_ch_8_2_0", src: "img/editor/figure/h_std_ch_8_2_0.png" },
            { id: "h_std_fa_5_2_0", src: "img/editor/figure/h_std_fa_5_2_0.png" },
            { id: "h_std_fa_7_2_0", src: "img/editor/figure/h_std_fa_7_2_0.png" },
            { id: "h_std_ca_13_2_0", src: "img/editor/figure/h_std_ca_13_2_0.png" },
            { id: "h_std_hr_2_2_0", src: "img/editor/figure/h_std_hr_2_2_0.png" },
            { id: "h_std_ch_201_2_0", src: "img/editor/figure/h_std_ch_201_2_0.png" },
            { id: "h_std_ch_207_2_0", src: "img/editor/figure/h_std_ch_207_2_0.png" },
            { id: "h_std_ls_802_2_0", src: "img/editor/figure/h_std_ls_802_2_0.png" },
            { id: "h_std_ls_801_2_0", src: "img/editor/figure/h_std_ls_801_2_0.png" },
            { id: "h_std_lg_4_2_0", src: "img/editor/figure/h_std_lg_4_2_0.png" },
            { id: "h_std_hrb_27_2_0", src: "img/editor/figure/h_std_hrb_27_2_0.png" },
            { id: "h_std_rs_801_2_0", src: "img/editor/figure/h_std_rs_801_2_0.png" },
            { id: "h_std_ch_5_2_0", src: "img/editor/figure/h_std_ch_5_2_0.png" },
            { id: "h_std_ch_1507_2_0", src: "img/editor/figure/h_std_ch_1507_2_0.png" },
            { id: "h_std_lg_201_2_0", src: "img/editor/figure/h_std_lg_201_2_0.png" },
            { id: "h_std_hr_9_2_0", src: "img/editor/figure/h_std_hr_9_2_0.png" },
            { id: "h_std_hrb_504_2_0", src: "img/editor/figure/h_std_hrb_504_2_0.png" },
            { id: "h_std_rh_1_2_0", src: "img/editor/figure/h_std_rh_1_2_0.png" },
            { id: "h_std_ca_6_2_0", src: "img/editor/figure/h_std_ca_6_2_0.png" },
            { id: "h_std_ha_26_2_0", src: "img/editor/figure/h_std_ha_26_2_0.png" },
            { id: "h_std_hrb_506_2_0", src: "img/editor/figure/h_std_hrb_506_2_0.png" },
            { id: "h_std_hr_503_2_0", src: "img/editor/figure/h_std_hr_503_2_0.png" },
            { id: "h_std_ch_802_2_0", src: "img/editor/figure/h_std_ch_802_2_0.png" },
            { id: "h_std_hr_30_2_0", src: "img/editor/figure/h_std_hr_30_2_0.png" },
            { id: "h_std_ca_11_2_0", src: "img/editor/figure/h_std_ca_11_2_0.png" },
            { id: "h_std_wa_2_2_0", src: "img/editor/figure/h_std_wa_2_2_0.png" },
            { id: "h_std_wa_4_2_0", src: "img/editor/figure/h_std_wa_4_2_0.png" },
            { id: "h_std_fa_1_2_0", src: "img/editor/figure/h_std_fa_1_2_0.png" },
            { id: "h_std_hd_2_2_0", src: "img/editor/figure/h_std_hd_2_2_0.png" },
            { id: "h_std_ca_1_2_0", src: "img/editor/figure/h_std_ca_1_2_0.png" },
            { id: "h_std_he_6_2_0", src: "img/editor/figure/h_std_he_6_2_0.png" },
            { id: "h_std_hrb_30_2_0", src: "img/editor/figure/h_std_hrb_30_2_0.png" },
            { id: "h_std_ch_20_2_0", src: "img/editor/figure/h_std_ch_20_2_0.png" },
            { id: "h_std_hrb_28_2_0", src: "img/editor/figure/h_std_hrb_28_2_0.png" },
            { id: "h_std_ca_2_2_0", src: "img/editor/figure/h_std_ca_2_2_0.png" },
            { id: "h_std_ca_14_2_0", src: "img/editor/figure/h_std_ca_14_2_0.png" },
            { id: "h_std_wa_11_2_0", src: "img/editor/figure/h_std_wa_11_2_0.png" },
            { id: "h_std_hrb_16_2_0", src: "img/editor/figure/h_std_hrb_16_2_0.png" },
            { id: "h_std_ha_7_2_0", src: "img/editor/figure/h_std_ha_7_2_0.png" },
            { id: "h_std_ch_1101_2_0", src: "img/editor/figure/h_std_ch_1101_2_0.png" },
            { id: "h_std_wa_6_2_0", src: "img/editor/figure/h_std_wa_6_2_0.png" },
            { id: "h_std_ch_1210_2_0", src: "img/editor/figure/h_std_ch_1210_2_0.png" },
            { id: "h_std_bd_1_2_0", src: "img/editor/figure/h_std_bd_1_2_0.png" },
            { id: "h_std_hr_19_2_0", src: "img/editor/figure/h_std_hr_19_2_0.png" },
            { id: "h_std_hrb_20_2_0", src: "img/editor/figure/h_std_hrb_20_2_0.png" },
            { id: "h_std_ha_24_2_0", src: "img/editor/figure/h_std_ha_24_2_0.png" },
            { id: "h_std_he_9_2_0", src: "img/editor/figure/h_std_he_9_2_0.png" },
            { id: "h_std_ha_14_2_0", src: "img/editor/figure/h_std_ha_14_2_0.png" },
            { id: "h_std_ha_2_2_0", src: "img/editor/figure/h_std_ha_2_2_0.png" },
            { id: "h_std_ey_4_2_0", src: "img/editor/figure/h_std_ey_4_2_0.png" },
            { id: "h_std_he_10_2_0", src: "img/editor/figure/h_std_he_10_2_0.png" },
            { id: "h_std_ch_106_2_0", src: "img/editor/figure/h_std_ch_106_2_0.png" },
            { id: "h_std_hr_17_2_0", src: "img/editor/figure/h_std_hr_17_2_0.png" },
            { id: "h_std_ch_1020_2_0", src: "img/editor/figure/h_std_ch_1020_2_0.png" },
            { id: "h_std_wa_9_2_0", src: "img/editor/figure/h_std_wa_9_2_0.png" },
            { id: "h_std_hrb_17_2_0", src: "img/editor/figure/h_std_hrb_17_2_0.png" },
            { id: "h_std_lg_2_2_0", src: "img/editor/figure/h_std_lg_2_2_0.png" },
            { id: "h_std_fa_11_2_0", src: "img/editor/figure/h_std_fa_11_2_0.png" },
            { id: "h_std_ls_800_2_0", src: "img/editor/figure/h_std_ls_800_2_0.png" },
            { id: "h_std_hr_200_2_0", src: "img/editor/figure/h_std_hr_200_2_0.png" },
            { id: "h_std_fa_2_2_0", src: "img/editor/figure/h_std_fa_2_2_0.png" },
            { id: "h_std_ea_1_2_0", src: "img/editor/figure/h_std_ea_1_2_0.png" },
            { id: "h_std_ch_1204_2_0", src: "img/editor/figure/h_std_ch_1204_2_0.png" },
            { id: "h_std_ca_15_2_0", src: "img/editor/figure/h_std_ca_15_2_0.png" },
            { id: "h_std_hrb_501_2_0", src: "img/editor/figure/h_std_hrb_501_2_0.png" },
            { id: "h_std_ch_1208_2_0", src: "img/editor/figure/h_std_ch_1208_2_0.png" },
            { id: "h_std_ca_16_2_0", src: "img/editor/figure/h_std_ca_16_2_0.png" },
            { id: "h_std_ch_1021_2_0", src: "img/editor/figure/h_std_ch_1021_2_0.png" },
            { id: "h_std_hr_24_2_0", src: "img/editor/figure/h_std_hr_24_2_0.png" },
            { id: "h_std_sh_2_2_0", src: "img/editor/figure/h_std_sh_2_2_0.png" },
            { id: "h_std_ca_12_2_0", src: "img/editor/figure/h_std_ca_12_2_0.png" },
            { id: "h_std_ch_204_2_0", src: "img/editor/figure/h_std_ch_204_2_0.png" },
            { id: "h_std_ha_27_2_0", src: "img/editor/figure/h_std_ha_27_2_0.png" },
            { id: "h_std_fa_8_2_0", src: "img/editor/figure/h_std_fa_8_2_0.png" },
            { id: "h_std_hr_4_2_0", src: "img/editor/figure/h_std_hr_4_2_0.png" },
            { id: "h_std_ch_101_2_0", src: "img/editor/figure/h_std_ch_101_2_0.png" },
            { id: "h_std_wa_1_2_0", src: "img/editor/figure/h_std_wa_1_2_0.png" },
            { id: "h_std_wa_7_2_0", src: "img/editor/figure/h_std_wa_7_2_0.png" },
            { id: "h_std_sh_8_2_0", src: "img/editor/figure/h_std_sh_8_2_0.png" },
            { id: "h_std_ls_17_2_0", src: "img/editor/figure/h_std_ls_17_2_0.png" },
            { id: "h_std_ha_13_2_0", src: "img/editor/figure/h_std_ha_13_2_0.png" },
            { id: "h_std_ch_506_2_0", src: "img/editor/figure/h_std_ch_506_2_0.png" },
            { id: "h_std_ch_210_2_0", src: "img/editor/figure/h_std_ch_210_2_0.png" },
            { id: "h_std_sh_4_2_0", src: "img/editor/figure/h_std_sh_4_2_0.png" },
            { id: "h_std_hrb_8_2_0", src: "img/editor/figure/h_std_hrb_8_2_0.png" },
            { id: "h_std_he_5_2_0", src: "img/editor/figure/h_std_he_5_2_0.png" },
            { id: "h_std_hrb_509_2_0", src: "img/editor/figure/h_std_hrb_509_2_0.png" },
            { id: "h_std_fa_9_2_0", src: "img/editor/figure/h_std_fa_9_2_0.png" },
            { id: "h_std_ch_501_2_0", src: "img/editor/figure/h_std_ch_501_2_0.png" },
            { id: "h_std_ch_4_2_0", src: "img/editor/figure/h_std_ch_4_2_0.png" },
            { id: "h_std_hr_11_2_0", src: "img/editor/figure/h_std_hr_11_2_0.png" },
            { id: "h_std_ch_1_2_0", src: "img/editor/figure/h_std_ch_1_2_0.png" },
            { id: "h_std_hrb_508_2_0", src: "img/editor/figure/h_std_hrb_508_2_0.png" },
            { id: "h_std_ch_1200_2_0", src: "img/editor/figure/h_std_ch_1200_2_0.png" },
            { id: "h_std_ch_3_2_0", src: "img/editor/figure/h_std_ch_3_2_0.png" },
            { id: "h_std_rs_1801_2_0", src: "img/editor/figure/h_std_rs_1801_2_0.png" },
            { id: "h_std_hrb_1_2_0", src: "img/editor/figure/h_std_hrb_1_2_0.png" },
            { id: "h_std_hr_203_2_0", src: "img/editor/figure/h_std_hr_203_2_0.png" },
            { id: "h_std_ls_2_2_0", src: "img/editor/figure/h_std_ls_2_2_0.png" },
            { id: "h_std_fa_10_2_0", src: "img/editor/figure/h_std_fa_10_2_0.png" },
            { id: "h_std_wa_12_2_0", src: "img/editor/figure/h_std_wa_12_2_0.png" },
            { id: "h_std_rs_1800_2_0", src: "img/editor/figure/h_std_rs_1800_2_0.png" },
            { id: "h_std_hr_20_2_0", src: "img/editor/figure/h_std_hr_20_2_0.png" },
            { id: "h_std_ch_503_2_0", src: "img/editor/figure/h_std_ch_503_2_0.png" },
            { id: "h_std_hrb_35_2_0", src: "img/editor/figure/h_std_hrb_35_2_0.png" },
            { id: "h_std_ha_15_2_0", src: "img/editor/figure/h_std_ha_15_2_0.png" },
            { id: "h_std_fa_4_2_0", src: "img/editor/figure/h_std_fa_4_2_0.png" },
            { id: "h_std_hr_26_2_0", src: "img/editor/figure/h_std_hr_26_2_0.png" },
            { id: "h_std_ha_10_2_0", src: "img/editor/figure/h_std_ha_10_2_0.png" },
            { id: "h_std_ha_22_2_0", src: "img/editor/figure/h_std_ha_22_2_0.png" },
            { id: "h_std_ha_21_2_0", src: "img/editor/figure/h_std_ha_21_2_0.png" },
            { id: "h_std_hrb_29_2_0", src: "img/editor/figure/h_std_hrb_29_2_0.png" },
            { id: "h_std_hr_201_2_0", src: "img/editor/figure/h_std_hr_201_2_0.png" },
            { id: "h_std_lg_1007_2_0", src: "img/editor/figure/h_std_lg_1007_2_0.png" },
            { id: "h_std_ha_17_2_0", src: "img/editor/figure/h_std_ha_17_2_0.png" },
            { id: "h_std_sh_6_2_0", src: "img/editor/figure/h_std_sh_6_2_0.png" },
            { id: "h_std_ca_17_2_0", src: "img/editor/figure/h_std_ca_17_2_0.png" },
            { id: "h_std_hrb_31_2_0", src: "img/editor/figure/h_std_hrb_31_2_0.png" },
            { id: "h_std_hrb_32_2_0", src: "img/editor/figure/h_std_hrb_32_2_0.png" },
            { id: "h_std_ey_5_2_0", src: "img/editor/figure/h_std_ey_5_2_0.png" },
            { id: "h_std_ch_1202_2_0", src: "img/editor/figure/h_std_ch_1202_2_0.png" },
            { id: "h_std_rs_802_2_0", src: "img/editor/figure/h_std_rs_802_2_0.png" },
            { id: "h_std_ch_1205_2_0", src: "img/editor/figure/h_std_ch_1205_2_0.png" },
            { id: "h_std_lg_5_2_0", src: "img/editor/figure/h_std_lg_5_2_0.png" },
            { id: "h_std_ha_18_2_0", src: "img/editor/figure/h_std_ha_18_2_0.png" },
            { id: "h_std_rs_800_2_0", src: "img/editor/figure/h_std_rs_800_2_0.png" },
            { id: "h_std_hrb_9_2_0", src: "img/editor/figure/h_std_hrb_9_2_0.png" },
            { id: "h_std_hrb_18_2_0", src: "img/editor/figure/h_std_hrb_18_2_0.png" },
            { id: "h_std_hr_18_2_0", src: "img/editor/figure/h_std_hr_18_2_0.png" },
            { id: "h_std_ea_3_2_0", src: "img/editor/figure/h_std_ea_3_2_0.png" },
            { id: "h_std_ea_5_2_0", src: "img/editor/figure/h_std_ea_5_2_0.png" },
            { id: "h_std_hrb_202_2_0", src: "img/editor/figure/h_std_hrb_202_2_0.png" },
            { id: "h_std_ch_10_2_0", src: "img/editor/figure/h_std_ch_10_2_0.png" },
            { id: "h_std_wa_8_2_0", src: "img/editor/figure/h_std_wa_8_2_0.png" },
            { id: "h_std_ca_5_2_0", src: "img/editor/figure/h_std_ca_5_2_0.png" },
            { id: "h_std_hrb_36_2_0", src: "img/editor/figure/h_std_hrb_36_2_0.png" },
            { id: "h_std_ch_17_2_0", src: "img/editor/figure/h_std_ch_17_2_0.png" },
            { id: "h_std_ch_23_2_0", src: "img/editor/figure/h_std_ch_23_2_0.png" },
            { id: "h_std_ha_12_2_0", src: "img/editor/figure/h_std_ha_12_2_0.png" },
            { id: "h_std_ey_9_2_0", src: "img/editor/figure/h_std_ey_9_2_0.png" },
            { id: "h_std_ch_2_2_0", src: "img/editor/figure/h_std_ch_2_2_0.png" },
            { id: "h_std_ha_19_2_0", src: "img/editor/figure/h_std_ha_19_2_0.png" },
            { id: "h_std_wa_3_2_0", src: "img/editor/figure/h_std_wa_3_2_0.png" },
            { id: "h_std_hrb_4_2_0", src: "img/editor/figure/h_std_hrb_4_2_0.png" },
            { id: "h_std_ch_200_2_0", src: "img/editor/figure/h_std_ch_200_2_0.png" },
            { id: "h_std_hrb_3_2_0", src: "img/editor/figure/h_std_hrb_3_2_0.png" },
            { id: "h_std_hr_509_2_0", src: "img/editor/figure/h_std_hr_509_2_0.png" },
            { id: "h_std_ch_209_2_0", src: "img/editor/figure/h_std_ch_209_2_0.png" },
            { id: "h_std_he_2_2_0", src: "img/editor/figure/h_std_he_2_2_0.png" },
            { id: "h_std_hr_34_2_0", src: "img/editor/figure/h_std_hr_34_2_0.png" },
            { id: "h_std_ch_206_2_0", src: "img/editor/figure/h_std_ch_206_2_0.png" },
            { id: "h_std_hrb_6_2_0", src: "img/editor/figure/h_std_hrb_6_2_0.png" },
            { id: "h_std_sh_5_2_0", src: "img/editor/figure/h_std_sh_5_2_0.png" },
            { id: "h_std_hr_1_2_0", src: "img/editor/figure/h_std_hr_1_2_0.png" },
            { id: "h_std_rs_17_2_0", src: "img/editor/figure/h_std_rs_17_2_0.png" },
            { id: "h_std_ch_502_2_0", src: "img/editor/figure/h_std_ch_502_2_0.png" },
            { id: "h_std_sh_7_2_0", src: "img/editor/figure/h_std_sh_7_2_0.png" },
            { id: "h_std_hrb_201_2_0", src: "img/editor/figure/h_std_hrb_201_2_0.png" },
            { id: "h_std_hrb_33_2_0", src: "img/editor/figure/h_std_hrb_33_2_0.png" },
            { id: "h_std_ls_1802_2_0", src: "img/editor/figure/h_std_ls_1802_2_0.png" },
            { id: "h_std_rs_1802_2_0", src: "img/editor/figure/h_std_rs_1802_2_0.png" },
            { id: "h_std_ch_1206_2_0", src: "img/editor/figure/h_std_ch_1206_2_0.png" },
            { id: "h_std_ha_5_2_0", src: "img/editor/figure/h_std_ha_5_2_0.png" },
            { id: "h_std_wa_5_2_0", src: "img/editor/figure/h_std_wa_5_2_0.png" },
            { id: "h_std_ch_208_2_0", src: "img/editor/figure/h_std_ch_208_2_0.png" },
            { id: "h_std_ha_9_2_0", src: "img/editor/figure/h_std_ha_9_2_0.png" },
            { id: "h_std_hrb_26_2_0", src: "img/editor/figure/h_std_hrb_26_2_0.png" },
            { id: "h_std_ha_20_2_0", src: "img/editor/figure/h_std_ha_20_2_0.png" }
        ]);

        this.loader.on("complete", () => {
            this.imagesLoaded = true;
        });
    }

    loadSets() {
        this.figureData.setTypes
            .forEach(st => {
                if (this.figure.filter(f => f.type == st.type).length == 0) {
                    this.figure.push({
                        type: st.type,
                        setId: null,
                        colorId: this.figureData.palettes.filter(p => p.id == st.paletteId)[0].colors[0].id
                    });
                }
            
                st.sets
                    .filter(s => s.selectable && ((!this.club && !s.club) || this.club))
                    .forEach(s => {
                        var set = new Set(st, s);
                        this.sets.push(set);
                    })
            });

        this.sets.forEach(s => s.update());
    }

    loadFigure() {
        // to-do validate figure if contains HC after HC expired (not sure if done here but crashes this)

        var figureString = document.getElementById('figure')?.value;
        var gender = document.getElementById('gender')?.value;

        if (gender) {
            this.gender = gender;
        }
        else {
            this.gender = "M";
            Animation.updateInputIfExists("gender", "M");
        }

        if (figureString) {
            var figureStrings = figureString.split(".");

            figureStrings.forEach(fs => {
                var typeSetColor = fs.split("-");
                this.figure = this.figure.filter(f => f.type != typeSetColor[0]);

                var colorId = parseInt(typeSetColor[2]);

                if (isNaN(colorId)) {
                    var paletteId = this.figureData.setTypes.filter(st => st.type == typeSetColor[0])[0].paletteId;
                    colorId = this.figureData.palettes.filter(p => p.id == paletteId)[0].colors[0].id;
                }

                this.figure.push({
                    type: typeSetColor[0],
                    setId: parseInt(typeSetColor[1]),
                    colorId: colorId
                });
            });
        }
        else {
            this.figure = this.randomizeFigure();
            Animation.updateInputIfExists("figure", this.getFigureString());
        }
    }

    getFigureString() {
        var figureStrings = [];

        this.figure
            .sort((a, b) => {
                return FigureManager.drawOrder.indexOf(a.type) - FigureManager.drawOrder.indexOf(b.type);
            })
            .forEach(f => {
                if (f.setId) {
                    var colorable = this.figureData.setTypes.filter(st => st.type == f.type)[0].sets.filter(s => s.id == f.setId)[0].colorable;
                    var colorId = colorable ? f.colorId : "";
                    figureStrings.push(f.type + "-" + f.setId + "-" + colorId);
                }
            });

        return figureStrings.join(".");
    }

    updateFigure(type, setId) {
        var colorId = this.figure.filter(f => f.type == type)[0].colorId;
        this.figure = this.figure.filter(f => f.type != type);
        this.figure.push({
            type: type,
            setId: setId,
            colorId: colorId
        });
    }

    randomizeFigure() {
        var figure = [];

        this.figureData.setTypes.forEach(st => {
            if (st.mandatory || Math.floor(Math.random() * 100) <= this.getSetTypeProbability(st.type)) {
                var sets = st.sets.filter(s => s.selectable && (s.gender == this.gender || s.gender == "U") && ((!this.club && !s.club) || this.club));

                var set = sets[Math.floor(Math.random() * sets.length)];
                
                var colors = [...this.figureData.palettes.filter(p => p.id == st.paletteId)[0].colors.filter(c => c.selectable && ((!this.club && !c.club) || this.club))];

                if (st.type == "hd") {
                    colors.splice(10);
                }

                var color = colors[Math.floor(Math.random() * colors.length)];

                figure.push({
                    type: st.type,
                    setId: set.id,
                    colorId: color.id
                });
            }
            else {
                var paletteId = this.figureData.setTypes.filter(st1 => st1.type == st.type)[0].paletteId;
                var colorId = this.figureData.palettes.filter(p => p.id == paletteId)[0].colors[0].id;

                figure.push({
                    type: st.type,
                    setId: null,
                    colorId: colorId
                });
            }
        });

        return figure;
    }

    getSetTypeProbability(setType) {
        switch (setType) {
            case "hr":
                return this.gender == "M" ? 97 : 100;
            case "ha":
                return this.gender == "M" ? 40 : 40;
            case "he":
                return this.gender == "M" ? 15 : 25;
            case "ea":
                return this.gender == "M" ? 30 : 15;
            case "fa":
                return this.gender == "M" ? 15 : 8;
            case "ca":
                return this.gender == "M" ? 10 : 15;
            case "wa":
                return this.gender == "M" ? 40 : 40;
            case "sh":
                return this.gender == "M" ? 95 : 95;
            default:
                return 30;
        }
    }

    getColorIdRgb(colorId) {
        var hex = [].concat(...this.figureData.palettes.map(p => p.colors)).filter(c => c.id == colorId)[0].color;
        var rgb = this.hexToRgb(hex);
        return rgb;
    }
    
    hexToRgb(hex) {
        var r = parseInt(hex.substring(1, 3), 16);
        var g = parseInt(hex.substring(3, 5), 16);
        var b = parseInt(hex.substring(5, 7), 16);
        return { r: r, g: g, b: b };
    }

    static drawOrder = ["li", "lh", "ls", "bd", "sh", "lg", "ch", "wa", "ca", "rh", "rs", "hd", "fc", "ey", "hr", "hrb", "fa", "ea", "ha", "he", "ri"];

    static offsets = {
        "h_std_ch_507_2_0": { x: 19, y: -48 },
        "h_std_hrb_28_2_0": { x: 12, y: -78 },
        "h_std_ch_9_2_0": { x: 19, y: -48 },
        "h_std_ls_800_2_0": { x: 43, y: -48 },
        "h_std_wa_5_2_0": { x: 21, y: -26 },
        "h_std_hrb_35_2_0": { x: 16, y: -77 },
        "h_std_ch_1208_2_0": { x: 19, y: -47 },
        "h_std_ch_21_2_0": { x: 19, y: -48 },
        "h_std_lg_6_2_0": { x: 22, y: -25 },
        "h_std_hrb_16_2_0": { x: 15, y: -77 },
        "h_std_ch_203_2_0": { x: 19, y: -47 },
        "h_std_he_5_2_0": { x: 22, y: -73 },
        "h_std_hr_4_2_0": { x: 5, y: -93 },
        "h_std_hrb_2_2_0": { x: 15, y: -78 },
        "h_std_hr_3_2_0": { x: 11, y: -79 },
        "h_std_ey_1_2_0": { x: 33, y: -62 },
        "h_std_ch_205_2_0": { x: 19, y: -47 },
        "h_std_hr_29_2_0": { x: 15, y: -78 },
        "h_std_ch_1207_2_0": { x: 35, y: -36 },
        "h_std_ch_1202_2_0": { x: 19, y: -49 },
        "h_std_ha_20_2_0": { x: 15, y: -78 },
        "h_std_ch_23_2_0": { x: 19, y: -49 },
        "h_std_hr_23_2_0": { x: 13, y: -79 },
        "h_std_hrb_19_2_0": { x: 15, y: -77 },
        "h_std_fa_12_2_0": { x: 22, y: -59 },
        "h_std_ch_1023_2_0": { x: 35, y: -43 },
        "h_std_ca_15_2_0": { x: 21, y: -52 },
        "h_std_hrb_503_2_0": { x: 13, y: -78 },
        "h_std_ch_8_2_0": { x: 19, y: -48 },
        "h_std_hr_33_2_0": { x: 18, y: -73 },
        "h_std_hr_34_2_0": { x: 13, y: -73 },
        "h_std_hr_9_2_0": { x: 20, y: -80 },
        "h_std_ha_15_2_0": { x: 16, y: -84 },
        "h_std_fa_6_2_0": { x: 33, y: -53 },
        "h_std_ha_12_2_0": { x: 14, y: -80 },
        "h_std_rs_1_2_0": { x: 18, y: -46 },
        "h_std_fc_1_2_0": { x: 36, y: -57 },
        "h_std_ch_1_2_0": { x: 19, y: -48 },
        "h_std_ca_11_2_0": { x: 38, y: -42 },
        "h_std_hrb_10_2_0": { x: 18, y: -78 },
        "h_std_ch_4_2_0": { x: 19, y: -48 },
        "h_std_ch_202_2_0": { x: 19, y: -49 },
        "h_std_ls_802_2_0": { x: 43, y: -48 },
        "h_std_hrb_203_2_0": { x: 10, y: -82 },
        "h_std_ha_5_2_0": { x: 14, y: -76 },
        "h_std_rh_1_2_0": { x: 18, y: -44 },
        "h_std_ha_10_2_0": { x: 20, y: -76 },
        "h_std_ca_7_2_0": { x: 22, y: -47 },
        "h_std_ch_1100_2_0": { x: 19, y: -48 },
        "h_std_ey_2_2_0": { x: 33, y: -62 },
        "h_std_hrb_33_2_0": { x: 16, y: -78 },
        "h_std_ls_1802_2_0": { x: 44, y: -32 },
        "h_std_lg_5_2_0": { x: 22, y: -25 },
        "h_std_hr_30_2_0": { x: 16, y: -82 },
        "h_std_hrb_501_2_0": { x: 11, y: -78 },
        "h_std_ch_18_2_0": { x: 20, y: -48 },
        "h_std_lg_1007_2_0": { x: 22, y: -16 },
        "h_std_ch_204_2_0": { x: 20, y: -50 },
        "h_std_ch_105_2_0": { x: 19, y: -49 },
        "h_std_ch_1204_2_0": { x: 36, y: -39 },
        "h_std_rs_2_2_0": { x: 18, y: -46 },
        "h_std_hrb_17_2_0": { x: 15, y: -78 },
        "h_std_ea_4_2_0": { x: 23, y: -64 },
        "h_std_ch_15_2_0": { x: 19, y: -47 },
        "h_std_lg_200_2_0": { x: 22, y: -25 },
        "h_std_ch_1020_2_0": { x: 34, y: -41 },
        "h_std_sh_7_2_0": { x: 24, y: -4 },
        "h_std_ha_23_2_0": { x: 18, y: -77 },
        "h_std_ha_6_2_0": { x: 9, y: -79 },
        "h_std_fa_4_2_0": { x: 30, y: -55 },
        "h_std_lg_7_2_0": { x: 21, y: -25 },
        "h_std_ha_7_2_0": { x: 11, y: -89 },
        "h_std_ls_17_2_0": { x: 43, y: -47 },
        "h_std_lg_2_2_0": { x: 22, y: -25 },
        "h_std_rs_17_2_0": { x: 18, y: -46 },
        "h_std_ch_1507_2_0": { x: 30, y: -45 },
        "h_std_hr_35_2_0": { x: 17, y: -73 },
        "h_std_ha_27_2_0": { x: 16, y: -88 },
        "h_std_sh_1_2_0": { x: 23, y: -7 },
        "h_std_ha_9_2_0": { x: 17, y: -76 },
        "h_std_ca_12_2_0": { x: 22, y: -53 },
        "h_std_ca_3_2_0": { x: 19, y: -52 },
        "h_std_ca_2_2_0": { x: 22, y: -48 },
        "h_std_hr_2_2_0": { x: 15, y: -78 },
        "h_std_he_1_2_0": { x: 12, y: -77 },
        "h_std_hrb_27_2_0": { x: 13, y: -81 },
        "h_std_ha_25_2_0": { x: 13, y: -84 },
        "h_std_rs_1802_2_0": { x: 20, y: -39 },
        "h_std_ha_14_2_0": { x: 14, y: -86 },
        "h_std_ha_4_2_0": { x: 17, y: -75 },
        "h_std_ch_201_2_0": { x: 18, y: -50 },
        "h_std_ch_504_2_0": { x: 19, y: -48 },
        "h_std_wa_2_2_0": { x: 21, y: -27 },
        "h_std_ha_17_2_0": { x: 14, y: -78 },
        "h_std_ea_1_2_0": { x: 22, y: -64 },
        "h_std_ch_502_2_0": { x: 19, y: -48 },
        "h_std_hr_6_2_0": { x: 7, y: -78 },
        "h_std_ch_208_2_0": { x: 19, y: -47 },
        "h_std_hrb_504_2_0": { x: 14, y: -77 },
        "h_std_lh_1_2_0": { x: 43, y: -47 },
        "h_std_wa_1_2_0": { x: 21, y: -26 },
        "h_std_hr_16_2_0": { x: 15, y: -77 },
        "h_std_hrb_24_2_0": { x: 16, y: -78 },
        "h_std_ch_206_2_0": { x: 19, y: -47 },
        "h_std_he_9_2_0": { x: 27, y: -79 },
        "h_std_hrb_18_2_0": { x: 17, y: -75 },
        "h_std_rs_801_2_0": { x: 16, y: -45 },
        "h_std_ch_1021_2_0": { x: 32, y: -43 },
        "h_std_ha_2_2_0": { x: 18, y: -74 },
        "h_std_hr_1_2_0": { x: 15, y: -78 },
        "h_std_ch_506_2_0": { x: 19, y: -50 },
        "h_std_ch_16_2_0": { x: 19, y: -49 },
        "h_std_lg_1_2_0": { x: 22, y: -25 },
        "h_std_ca_8_2_0": { x: 22, y: -49 },
        "h_std_fa_9_2_0": { x: 16, y: -58 },
        "h_std_ls_2_2_0": { x: 43, y: -47 },
        "h_std_ch_17_2_0": { x: 20, y: -48 },
        "h_std_ls_1_2_0": { x: 43, y: -47 },
        "h_std_hrb_6_2_0": { x: 7, y: -78 },
        "h_std_fa_1_2_0": { x: 38, y: -46 },
        "h_std_ca_16_2_0": { x: 22, y: -53 },
        "h_std_hrb_31_2_0": { x: 13, y: -82 },
        "h_std_hr_31_2_0": { x: 13, y: -82 },
        "h_std_ha_8_2_0": { x: 9, y: -86 },
        "h_std_ha_21_2_0": { x: 18, y: -76 },
        "h_std_ca_13_2_0": { x: 38, y: -42 },
        "h_std_ca_5_2_0": { x: 21, y: -51 },
        "h_std_he_10_2_0": { x: 26, y: -74 },
        "h_std_ey_8_2_0": { x: 32, y: -63 },
        "h_std_ca_18_2_0": { x: 22, y: -48 },
        "h_std_hr_508_2_0": { x: 16, y: -77 },
        "h_std_hr_200_2_0": { x: 13, y: -89 },
        "h_std_hrb_9_2_0": { x: 20, y: -80 },
        "h_std_sh_6_2_0": { x: 23, y: -7 },
        "h_std_he_3_2_0": { x: 22, y: -74 },
        "h_std_hrb_508_2_0": { x: 16, y: -77 },
        "h_std_ch_501_2_0": { x: 19, y: -48 },
        "h_std_ha_11_2_0": { x: 15, y: -78 },
        "h_std_ha_13_2_0": { x: 12, y: -78 },
        "h_std_hr_20_2_0": { x: 17, y: -77 },
        "h_std_hr_27_2_0": { x: 13, y: -81 },
        "h_std_hrb_29_2_0": { x: 15, y: -78 },
        "h_std_hr_5_2_0": { x: 17, y: -79 },
        "h_std_hr_8_2_0": { x: 19, y: -75 },
        "h_std_ea_2_2_0": { x: 25, y: -66 },
        "h_std_wa_8_2_0": { x: 21, y: -25 },
        "h_std_fa_5_2_0": { x: 26, y: -56 },
        "h_std_hd_2_2_0": { x: 20, y: -74 },
        "h_std_ha_22_2_0": { x: 17, y: -76 },
        "h_std_ca_9_2_0": { x: 23, y: -50 },
        "h_std_hr_17_2_0": { x: 15, y: -78 },
        "h_std_ch_106_2_0": { x: 19, y: -49 },
        "h_std_hrb_4_2_0": { x: 5, y: -93 },
        "h_std_hrb_26_2_0": { x: 16, y: -78 },
        "h_std_fa_3_2_0": { x: 17, y: -64 },
        "h_std_ch_1800_2_0": { x: 24, y: -49 },
        "h_std_fa_11_2_0": { x: 22, y: -62 },
        "h_std_ca_6_2_0": { x: 29, y: -49 },
        "h_std_ch_207_2_0": { x: 19, y: -47 },
        "h_std_hr_11_2_0": { x: 14, y: -80 },
        "h_std_ha_1_2_0": { x: 11, y: -83 },
        "h_std_ch_10_2_0": { x: 16, y: -54 },
        "h_std_ch_802_2_0": { x: 19, y: -50 },
        "h_std_rs_1800_2_0": { x: 18, y: -23 },
        "h_std_hrb_509_2_0": { x: 13, y: -78 },
        "h_std_ch_20_2_0": { x: 19, y: -49 },
        "h_std_ch_800_2_0": { x: 19, y: -50 },
        "h_std_ch_6_2_0": { x: 19, y: -48 },
        "h_std_ca_1_2_0": { x: 23, y: -49 },
        "h_std_wa_3_2_0": { x: 21, y: -26 },
        "h_std_hr_201_2_0": { x: 17, y: -76 },
        "h_std_ch_3_2_0": { x: 19, y: -48 },
        "h_std_ch_1206_2_0": { x: 39, y: -47 },
        "h_std_rs_800_2_0": { x: 18, y: -46 },
        "h_std_hrb_1_2_0": { x: 15, y: -78 },
        "h_std_hr_24_2_0": { x: 16, y: -78 },
        "h_std_ls_1800_2_0": { x: 44, y: -29 },
        "h_std_hr_18_2_0": { x: 17, y: -75 },
        "h_std_hrb_36_2_0": { x: 14, y: -77 },
        "h_std_sh_8_2_0": { x: 23, y: -6 },
        "h_std_hr_503_2_0": { x: 13, y: -78 },
        "h_std_wa_4_2_0": { x: 21, y: -26 },
        "h_std_fa_10_2_0": { x: 19, y: -71 },
        "h_std_hr_507_2_0": { x: 13, y: -77 },
        "h_std_ch_1210_2_0": { x: 19, y: -47 },
        "h_std_wa_7_2_0": { x: 21, y: -27 },
        "h_std_hrb_201_2_0": { x: 17, y: -76 },
        "h_std_ch_1101_2_0": { x: 19, y: -48 },
        "h_std_hrb_20_2_0": { x: 17, y: -77 },
        "h_std_ch_503_2_0": { x: 19, y: -48 },
        "h_std_hr_504_2_0": { x: 14, y: -77 },
        "h_std_sh_5_2_0": { x: 23, y: -8 },
        "h_std_hd_1_2_0": { x: 20, y: -74 },
        "h_std_ey_3_2_0": { x: 32, y: -62 },
        "h_std_ch_1801_2_0": { x: 19, y: -51 },
        "h_std_ch_2_2_0": { x: 19, y: -48 },
        "h_std_ch_803_2_0": { x: 19, y: -50 },
        "h_std_he_6_2_0": { x: 29, y: -76 },
        "h_std_lg_4_2_0": { x: 21, y: -25 },
        "h_std_wa_10_2_0": { x: 22, y: -24 },
        "h_std_ch_100_2_0": { x: 19, y: -48 },
        "h_std_ch_5_2_0": { x: 19, y: -48 },
        "h_std_ls_1801_2_0": { x: 44, y: -44 },
        "h_std_hr_202_2_0": { x: 13, y: -82 },
        "h_std_ch_209_2_0": { x: 23, y: -50 },
        "h_std_ca_14_2_0": { x: 23, y: -50 },
        "h_std_ha_16_2_0": { x: 18, y: -88 },
        "h_std_ca_10_2_0": { x: 21, y: -51 },
        "h_std_hrb_30_2_0": { x: 16, y: -82 },
        "h_std_ls_801_2_0": { x: 43, y: -47 },
        "h_std_ey_5_2_0": { x: 32, y: -62 },
        "h_std_sh_3_2_0": { x: 23, y: -7 },
        "h_std_hr_506_2_0": { x: 10, y: -78 },
        "h_std_hr_36_2_0": { x: 19, y: -73 },
        "h_std_he_2_2_0": { x: 20, y: -72 },
        "h_std_hrb_3_2_0": { x: 11, y: -79 },
        "h_std_hr_26_2_0": { x: 16, y: -78 },
        "h_std_hr_501_2_0": { x: 11, y: -78 },
        "h_std_fa_8_2_0": { x: 35, y: -52 },
        "h_std_sh_4_2_0": { x: 23, y: -7 },
        "h_std_hrb_8_2_0": { x: 19, y: -75 },
        "h_std_ey_6_2_0": { x: 32, y: -63 },
        "h_std_ca_4_2_0": { x: 33, y: -43 },
        "h_std_hrb_32_2_0": { x: 20, y: -78 },
        "h_std_wa_6_2_0": { x: 19, y: -27 },
        "h_std_he_8_2_0": { x: 22, y: -54 },
        "h_std_hr_19_2_0": { x: 15, y: -77 },
        "h_std_fa_2_2_0": { x: 38, y: -55 },
        "h_std_ch_22_2_0": { x: 19, y: -49 },
        "h_std_ch_200_2_0": { x: 19, y: -50 },
        "h_std_ha_3_2_0": { x: 16, y: -76 },
        "h_std_ey_4_2_0": { x: 33, y: -61 },
        "h_std_hr_203_2_0": { x: 10, y: -82 },
        "h_std_hr_509_2_0": { x: 13, y: -78 },
        "h_std_ha_24_2_0": { x: 9, y: -86 },
        "h_std_hrb_202_2_0": { x: 13, y: -82 },
        "h_std_hrb_507_2_0": { x: 13, y: -77 },
        "h_std_hrb_200_2_0": { x: 13, y: -89 },
        "h_std_ca_17_2_0": { x: 26, y: -40 },
        "h_std_ch_1205_2_0": { x: 33, y: -42 },
        "h_std_ch_505_2_0": { x: 19, y: -48 },
        "h_std_hrb_23_2_0": { x: 13, y: -79 },
        "h_std_wa_9_2_0": { x: 21, y: -26 },
        "h_std_ea_5_2_0": { x: 23, y: -64 },
        "h_std_hrb_5_2_0": { x: 17, y: -79 },
        "h_std_hrb_34_2_0": { x: 13, y: -77 },
        "h_std_rs_1801_2_0": { x: 17, y: -41 },
        "h_std_ch_101_2_0": { x: 19, y: -48 },
        "h_std_hr_10_2_0": { x: 18, y: -78 },
        "h_std_lg_201_2_0": { x: 22, y: -25 },
        "h_std_hrb_506_2_0": { x: 10, y: -78 },
        "h_std_fa_7_2_0": { x: 17, y: -71 },
        "h_std_ey_7_2_0": { x: 32, y: -63 },
        "h_std_ea_6_2_0": { x: 23, y: -63 },
        "h_std_rs_802_2_0": { x: 18, y: -45 },
        "h_std_ch_1802_2_0": { x: 32, y: -43 },
        "h_std_ch_801_2_0": { x: 18, y: -51 },
        "h_std_ha_18_2_0": { x: 16, y: -85 },
        "h_std_hr_32_2_0": { x: 21, y: -74 },
        "h_std_ch_210_2_0": { x: 19, y: -47 },
        "h_std_hr_28_2_0": { x: 12, y: -78 },
        "h_std_lg_3_2_0": { x: 22, y: -25 },
        "h_std_ch_1200_2_0": { x: 19, y: -36 },
        "h_std_ea_3_2_0": { x: 22, y: -63 },
        "h_std_ha_26_2_0": { x: 18, y: -70 },
        "h_std_he_4_2_0": { x: 15, y: -66 },
        "h_std_ha_19_2_0": { x: 18, y: -90 },
        "h_std_sh_2_2_0": { x: 23, y: -7 },
        "h_std_ca_19_2_0": { x: 21, y: -51 },
        "h_std_wa_12_2_0": { x: 21, y: -27 },
        "h_std_he_7_2_0": { x: 18, y: -61 },
        "h_std_ey_9_2_0": { x: 32, y: -63 },
        "h_std_bd_1_2_0": { x: 22, y: -50 },
        "h_std_wa_11_2_0": { x: 21, y: -27 },
        "h_std_hrb_11_2_0": { x: 14, y: -80 }
    }
}