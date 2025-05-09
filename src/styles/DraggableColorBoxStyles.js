import sizes from "./sizes";

const styles = {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-6px",
        "&:hover": {
            "& .deleteIcon": {
                opacity: 1,
                transform: "scale(1.3)"
            }
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: "20%"
        },
        [sizes.down("md")]: {
            width: "50%",
            height: "10%"
        },
        [sizes.down("sm")]: {
            width: "100%",
            height: "5%"
        }
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0",
        bottom: "0",
        padding: "10px",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "rgba(0, 0, 0, 0.5)"
    },
    deleteIcon: {
        opacity: 0,
        color: "rgba(0, 0, 0, 0.5)",
        width: "20px",
        height: "20px",
        padding: "5px",
        transition: "all 0.3s ease-in-out",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
        "&:hover": {
            color: "white",
            transform: "scale(1.3)"
        }
    }
};

export default styles;